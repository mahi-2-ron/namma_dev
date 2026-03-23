import os
import subprocess
import datetime
import sys

def run_command(command):
    try:
        result = subprocess.run(command, shell=True, check=True, text=True, capture_output=True)
        print(result.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error executing {command}:")
        print(e.stderr)
        return False

def autopush(message=None):
    if not message:
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        message = f"Auto-push: {timestamp}"
    
    print(f"Starting auto-push with message: '{message}'")
    
    if not run_command("git add ."):
        return
    
    if not run_command(f'git commit -m "{message}"'):
        print("Nothing to commit or commit failed.")
        # We continue to push anyway in case there are unpushed commits
    
    if run_command("git push origin main"):
        print("Successfully pushed to GitHub!")
    else:
        print("Failed to push to GitHub. Check your internet connection or remote settings.")

if __name__ == "__main__":
    commit_msg = sys.argv[1] if len(sys.argv) > 1 else None
    autopush(commit_msg)
