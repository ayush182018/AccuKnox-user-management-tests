import shutil
import os
from datetime import datetime

SOURCE_DIR = "/Users/ayush/Desktop/source_data"
BACKUP_DIR = "/Users/ayush/Desktop/backup_data"

def perform_backup():
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = os.path.join(BACKUP_DIR, f"backup_{timestamp}")

    try:
        shutil.copytree(SOURCE_DIR, backup_path)
        print(f"[SUCCESS] Backup completed at {backup_path}")
    except FileNotFoundError:
        print("[ERROR] Source directory not found.")
    except Exception as e:
        print(f"[ERROR] Backup failed: {e}")


if __name__ == "__main__":
    perform_backup()