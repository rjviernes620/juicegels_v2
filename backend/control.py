#!/usr/bin/env python3
import os
import sys
import signal
import subprocess
import argparse

# Resolve the backend directory path dynamically
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MAINTENANCE_FILE = os.path.join(BASE_DIR, 'maintenance.flag')

# ANSI Colors
COLOR_RESET = "\033[0m"
COLOR_BOLD = "\033[1m"
COLOR_RED = "\033[31m"
COLOR_GREEN = "\033[32m"
COLOR_YELLOW = "\033[33m"
COLOR_BLUE = "\033[34m"
COLOR_CYAN = "\033[36m"
COLOR_WHITE = "\033[37m"

def colorize(text, color):
    if sys.stdout.isatty():
        return f"{color}{text}{COLOR_RESET}"
    return text

def is_maintenance_active():
    return os.path.isfile(MAINTENANCE_FILE)

def get_stripe_mode():
    return 'test' if is_maintenance_active() else 'live'

def set_maintenance(active):
    if active:
        with open(MAINTENANCE_FILE, 'w') as f:
            f.write('active')
        print(colorize("Maintenance mode: ENABLED (All storefront website API requests will be blocked).", COLOR_RED + COLOR_BOLD))
    else:
        if os.path.isfile(MAINTENANCE_FILE):
            os.remove(MAINTENANCE_FILE)
        print(colorize("Maintenance mode: DISABLED (Website API requests are active).", COLOR_GREEN + COLOR_BOLD))

def find_processes(pattern):
    pids = []
    # Try /proc first (highly reliable on Linux container systems like Render)
    if os.path.exists('/proc'):
        for name in os.listdir('/proc'):
            if name.isdigit():
                try:
                    with open(os.path.join('/proc', name, 'cmdline'), 'r') as f:
                        cmd = f.read().replace('\0', ' ').strip()
                        if pattern in cmd and int(name) != os.getpid():
                            pids.append(int(name))
                except Exception:
                    continue
        if pids:
            return pids
            
    # Windows process search fallback
    if sys.platform == 'win32':
        try:
            # We use powershell to query Win32_Process and filter by command line
            cmd = f'powershell -NoProfile -Command "Get-CimInstance Win32_Process | Where-Object {{ $_.CommandLine -like \'*{pattern}*\' }} | Select-Object -ExpandProperty ProcessId"'
            output = subprocess.check_output(cmd, shell=True).decode().strip()
            for p in output.split():
                if p.strip().isdigit() and int(p) != os.getpid():
                    pids.append(int(p))
            if pids:
                return pids
        except Exception:
            pass

    # Fallback to subprocess/pgrep if /proc walking failed or isn't populated (Linux/macOS)
    try:
        output = subprocess.check_output(['pgrep', '-f', pattern]).decode().strip()
        pids = [int(p) for p in output.split('\n') if p.strip().isdigit() and int(p) != os.getpid()]
        return pids
    except Exception:
        pass
        
    return []

def get_gunicorn_master_pid():
    gunicorn_pids = find_processes('gunicorn')
    if not gunicorn_pids:
        return None
    # For each PID, check its parent PID. The master process is the one
    # whose parent is not in gunicorn_pids (it's usually 1 or a shell/runner).
    for pid in gunicorn_pids:
        try:
            with open(f'/proc/{pid}/status', 'r') as f:
                for line in f:
                    if line.startswith('PPid:'):
                        ppid = int(line.split()[1])
                        if ppid not in gunicorn_pids:
                            return pid
        except Exception:
            continue
    # Fallback: return the smallest PID
    return min(gunicorn_pids)

def check_server_running():
    if sys.platform != 'win32':
        gunicorn_pids = find_processes('gunicorn')
        if gunicorn_pids:
            master = get_gunicorn_master_pid()
            return True, f"Running under Gunicorn (Master PID: {master}, Worker PIDs: {', '.join(map(str, [p for p in gunicorn_pids if p != master]))})"
    
    server_pids = find_processes('server.py')
    if server_pids:
        return True, f"Running standalone (PIDs: {', '.join(map(str, server_pids))})"
        
    return False, "Offline"

def reset_server():
    print(colorize("Attempting to reload server...", COLOR_CYAN))
    
    # 1. Look for Gunicorn (Linux/Unix only)
    if sys.platform != 'win32':
        master_pid = get_gunicorn_master_pid()
        if master_pid:
            try:
                os.kill(master_pid, signal.SIGHUP)
                print(colorize(f"Successfully sent SIGHUP reload signal to Gunicorn master process (PID {master_pid}).", COLOR_GREEN))
                return
            except Exception as e:
                print(colorize(f"Failed to signal Gunicorn master process: {e}", COLOR_RED))

    # 2. If Gunicorn is not found, look for standalone server.py processes
    server_pids = find_processes('server.py')
    if server_pids:
        try:
            for pid in server_pids:
                # Under Windows, SIGHUP does not exist, and SIGTERM kills standalone.
                os.kill(pid, signal.SIGTERM)
                print(colorize(f"Sent SIGTERM to standalone server process (PID {pid}). Process manager should restart it.", COLOR_YELLOW))
            return
        except Exception as e:
            print(colorize(f"Failed to signal standalone processes: {e}", COLOR_RED))

    print(colorize("Error: Could not find any running Gunicorn or server.py processes.", COLOR_RED))
    print(colorize("If running locally, please restart the server in your terminal.", COLOR_YELLOW))

def show_status():
    stripe_mode = get_stripe_mode()
    maint_active = is_maintenance_active()
    running, run_status = check_server_running()
    
    # Format values with color
    if stripe_mode == 'live':
        stripe_str = colorize("LIVE mode", COLOR_GREEN + COLOR_BOLD)
    else:
        stripe_str = colorize("TEST mode", COLOR_YELLOW + COLOR_BOLD)
        
    if maint_active:
        maint_str = colorize("ACTIVE (Website offline)", COLOR_RED + COLOR_BOLD)
    else:
        maint_str = colorize("INACTIVE (Website live)", COLOR_GREEN + COLOR_BOLD)
        
    if running:
        status_str = colorize(run_status, COLOR_GREEN)
    else:
        status_str = colorize(run_status, COLOR_RED)
        
    print(colorize("=" * 60, COLOR_CYAN))
    print(colorize(" JUICEGELS BACKEND SERVER STATUS", COLOR_CYAN + COLOR_BOLD))
    print(colorize("=" * 60, COLOR_CYAN))
    print(f"  Process Status:   {status_str}")
    print(f"  Stripe Server:    {stripe_str}")
    print(f"  Maintenance:      {maint_str}")
    print(colorize("=" * 60, COLOR_CYAN))

def generate_2fa():
    import base64
    import os
    import urllib.parse
    
    # 20 bytes random seed (160 bits, standard for TOTP)
    raw_bytes = os.urandom(20)
    secret = base64.b32encode(raw_bytes).decode('utf-8').replace('=', '')
    
    print(colorize("=" * 60, COLOR_CYAN))
    print(colorize(" GENERATED 2FA SECRET KEY FOR MAINTENANCE BYPASS", COLOR_CYAN + COLOR_BOLD))
    print(colorize("=" * 60, COLOR_CYAN))
    print(f"  Secret Key (Base32): {colorize(secret, COLOR_YELLOW + COLOR_BOLD)}")
    print(colorize("-" * 60, COLOR_CYAN))
    
    # Construct provisioning URI (standard TOTP URL)
    issuer = "JuiceGels"
    label = "Admin Bypass"
    encoded_issuer = urllib.parse.quote(issuer)
    encoded_label = urllib.parse.quote(label)
    otpauth_uri = f"otpauth://totp/{encoded_issuer}:{encoded_label}?secret={secret}&issuer={encoded_issuer}"
    
    print(colorize("Setup Instructions:", COLOR_BOLD))
    print("1. Enter the Secret Key manually in your authenticator app (Google Authenticator, Authy, etc.).")
    print("   Or scan/import the following provisioning link if your app supports pasting URLs:")
    print(f"   {colorize(otpauth_uri, COLOR_GREEN)}")
    print("\n2. Configure the server environment variable:")
    print(f"   Set {colorize('MAINTENANCE_2FA_SECRET', COLOR_WHITE + COLOR_BOLD)} to the Secret Key generated above.")
    print("   For local testing, place it in your .env file:")
    print(f"   MAINTENANCE_2FA_SECRET={secret}")
    print(colorize("=" * 60, COLOR_CYAN))

def start_interactive_shell():
    show_status()
    print(colorize("\nEntering interactive control shell.", COLOR_CYAN))
    print(colorize("Type 'help' for a list of commands, or 'exit' to quit.\n", COLOR_WHITE))
    
    while True:
        try:
            # Set up the prompt with a cool icon/color
            prompt = colorize("juicegels-control> ", COLOR_BLUE)
            cmd_line = input(prompt).strip()
            if not cmd_line:
                continue
            
            parts = cmd_line.split()
            cmd = parts[0].lower()
            
            if cmd in ('exit', 'quit'):
                print(colorize("Exiting control tool. Goodbye!", COLOR_CYAN))
                break
            elif cmd == 'help':
                print(colorize("Available commands:", COLOR_BOLD))
                print(f"  {colorize('status', COLOR_GREEN):<25} Show current server settings and process status")
                print(f"  {colorize('maintenance on', COLOR_GREEN):<25} Turn maintenance mode ON (blocks checkout/apis)")
                print(f"  {colorize('maintenance off', COLOR_GREEN):<25} Turn maintenance mode OFF (restores storefront)")
                print(f"  {colorize('generate-2fa', COLOR_GREEN):<25} Generate a new 2FA secret key for maintenance bypass")
                print(f"  {colorize('reset', COLOR_GREEN):<25} Reload server workers (sends SIGHUP/SIGTERM)")
                print(f"  {colorize('exit / quit', COLOR_GREEN):<25} Exit interactive control mode")
            elif cmd == 'status':
                show_status()
            elif cmd == 'stripe':
                print(colorize("Note: Stripe mode is now automatically tied to maintenance mode. Switch maintenance mode to toggle Stripe.", COLOR_YELLOW))
            elif cmd == 'maintenance':
                if len(parts) < 2 or parts[1].lower() not in ('on', 'off'):
                    print(colorize("Error: Specify 'on' or 'off'. Example: maintenance on", COLOR_RED))
                else:
                    set_maintenance(parts[1].lower() == 'on')
            elif cmd == 'generate-2fa':
                generate_2fa()
            elif cmd == 'reset':
                reset_server()
            else:
                print(colorize(f"Unknown command: '{cmd}'. Type 'help' for a list of commands.", COLOR_RED))
        except (KeyboardInterrupt, EOFError):
            print(colorize("\nExiting control tool. Goodbye!", COLOR_CYAN))
            break
        except Exception as e:
            print(colorize(f"Error executing command: {e}", COLOR_RED))

def main():
    parser = argparse.ArgumentParser(
        description="JuiceGels Render Shell Control Tool",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python control.py status
  python control.py maintenance on
  python control.py maintenance off
  python control.py generate-2fa
  python control.py reset
"""
    )
    
    subparsers = parser.add_subparsers(dest="command", help="Command to run")
    
    # Status command
    subparsers.add_parser("status", help="Show current server settings and status")
    
    # Maintenance command
    maint_parser = subparsers.add_parser("maintenance", help="Toggle maintenance mode")
    maint_parser.add_argument("state", choices=["on", "off"], help="Maintenance state: on or off")
    
    # Generate 2FA command
    subparsers.add_parser("generate-2fa", help="Generate a new 2FA secret key for maintenance bypass")
    
    # Reset command
    subparsers.add_parser("reset", help="Restart/reload the server workers")
    
    # Interactive command (explicit option)
    subparsers.add_parser("interactive", help="Start the interactive shell (default)")
    
    args = parser.parse_args()
    
    if not args.command or args.command == "interactive":
        start_interactive_shell()
        sys.exit(0)
        
    if args.command == "status":
        show_status()
    elif args.command == "maintenance":
        set_maintenance(args.state == "on")
    elif args.command == "generate-2fa":
        generate_2fa()
    elif args.command == "reset":
        reset_server()

if __name__ == "__main__":
    main()
