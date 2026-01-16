import requests

def check_health(url):
    try:
        response = requests.get(url, timeout=5)
        if 200 <= response.status_code < 300:
            print(f"Application Status: UP (HTTP {response.status_code})")
        else:
            print(f"Application Status: DOWN (HTTP {response.status_code})")
    except requests.exceptions.RequestException:
        print("Application Status: DOWN (No Response)")

if __name__ == "__main__":
    url = input("Enter the URL to check: ").strip()
    if not url.startswith("http://") and not url.startswith("https://"):
        url = "http://" + url  # Add http by default if missing
    check_health(url)
