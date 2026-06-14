from pathlib import Path
import sys

BASE_NAME = "JUICEGELS"
AUTO_RENAME_ALL = "--all" in sys.argv  # Run all renames in one go if passed

directory = Path(__file__).parent
script_name = Path(__file__).name

files = sorted(
    [f for f in directory.iterdir() if f.is_file() and f.name != script_name],
    key=lambda x: x.name
)

if not files:
    print("No files found to rename.")
    raise SystemExit

print("DRY RUN")
print("-" * 50)

rename_plan = []

# new_name = f"{BASE_NAME}-{index:04d}{file_path.suffix}"

count = 1
for index, file_path in enumerate(files):
    new_name = f"{BASE_NAME}-{count:04d}{file_path.suffix}"
    new_path = directory / new_name
    rename_plan.append((file_path, new_path))
    print(f"{file_path.name}  ->  {new_name}")
    count += 1

if not AUTO_RENAME_ALL:
    confirm = input("\nProceed with rename? Type yes to continue: ").strip().lower()
    if confirm != "yes":
        print("Rename cancelled.")
        raise SystemExit
else:
    print("\n--all detected: renaming all files in one go...")

print("\nRENAMING")
print("-" * 50)

for old_path, new_path in rename_plan:
    old_path.rename(new_path)
    print(f"Renamed: {old_path.name} -> {new_path.name}")

print("\nDone.")