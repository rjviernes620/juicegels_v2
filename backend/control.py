#!/usr/bin/env python3
import os
import sys
import signal
import subprocess
import argparse

# Resolve the backend directory path dynamically
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STRIPE_MODE_FILE = os.path.join(BASE_DIR, 'stripe_mode.flag')
MAINTENANCE_FILE = os.path.join(BASE_DIR, 'maintenance.flag')

def get_stripe_mode():
    if os.path.isfile(STRIPE_MODE_FILE):
        with open(STRIPE_MODE_FILE, 'r') as f:
            mode = f.read().strip().lower()
            if mode in ('live', 'test'):
                return mode
    return 'live'

def set_stripe_mode(mode):
    mode = mode.lower()
    if mode not in ('live', 'test'):
        print(f"Error: Invalid stripe mode '{mode}'. Use 'live' or 'test'.")
        sys.exit(1)
    with open(STRIPE_MODE_FILE, 'w') as f:
        f.write(mode)
    print(f"Stripe mode successfully set to: {mode.upper()}")

def is_maintenance_active():
    return os.path.isfile(MAINTENANCE_FILE)

def set_maintenance(active):
    if active:
        with open(MAINTENANCE_FILE, 'w') as f:
            f.write('active')
        print("Maintenance mode: ENABLED (All storefront website API requests will be blocked).")
    else:
        if os.path.isfile(MAINTENANCE_FILE):
            os.remove(MAINTENANCE_FILE)
        print("Maintenance mode: DISABLED (Website API requests are active).")

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
    print("Attempting to reload server...")
    
    # 1. Look for Gunicorn (Linux/Unix only)
    if sys.platform != 'win32':
        master_pid = get_gunicorn_master_pid()
        if master_pid:
            try:
                os.kill(master_pid, signal.SIGHUP)
                print(f"Successfully sent SIGHUP reload signal to Gunicorn master process (PID {master_pid}).")
                return
            except Exception as e:
                print(f"Failed to signal Gunicorn master process: {e}")

    # 2. If Gunicorn is not found, look for standalone server.py processes
    server_pids = find_processes('server.py')
    if server_pids:
        try:
            for pid in server_pids:
                # Under Windows, SIGHUP does not exist, and SIGTERM kills standalone.
                # SIGTERM is supported on Windows as well.
                os.kill(pid, signal.SIGTERM)
                print(f"Sent SIGTERM to standalone server process (PID {pid}). Process manager should restart it.")
            return
        except Exception as e:
            print(f"Failed to signal standalone processes: {e}")

    print("Error: Could not find any running Gunicorn or server.py processes.")
    print("If running locally, please restart the server in your terminal.")

def show_status():
    stripe_mode = get_stripe_mode()
    maint_active = is_maintenance_active()
    running, run_status = check_server_running()
    
    print("=" * 60)
    print(" JUICEGELS BACKEND SERVER STATUS")
    print("=" * 60)
    print(f"  Process Status:   {run_status}")
    print(f"  Stripe Server:    {stripe_mode.upper()} mode")
    print(f"  Maintenance:      {'ACTIVE (Website offline)' if maint_active else 'INACTIVE (Website live)'}")
    print("=" * 60)

def main():
    parser = argparse.ArgumentParser(
        description="JuiceGels Render Shell Control Tool",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python control.py status
  python control.py stripe test
  python control.py stripe live
  python control.py maintenance on
  python control.py maintenance off
  python control.py reset
"""
    )
    
    subparsers = parser.add_subparsers(dest="command", help="Command to run")
    
    # Status command
    subparsers.add_parser("status", help="Show current server settings and status")
    
    # Stripe command
    stripe_parser = subparsers.add_parser("stripe", help="Switch Stripe modes")
    stripe_parser.add_argument("mode", choices=["live", "test"], help="Stripe mode: live or test")
    
    # Maintenance command
    maint_parser = subparsers.add_parser("maintenance", help="Toggle maintenance mode")
    maint_parser.add_argument("state", choices=["on", "off"], help="Maintenance state: on or off")
    
    # Reset command
    subparsers.add_parser("reset", help="Restart/reload the server workers")
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        sys.exit(0)
        
    if args.command == "status":
        show_status()
    elif args.command == "stripe":
        set_stripe_mode(args.mode)
    elif args.command == "maintenance":
        set_maintenance(args.state == "on")
    elif args.command == "reset":
        reset_server()

if __name__ == "__main__":
    main()
