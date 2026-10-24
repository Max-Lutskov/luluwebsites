"""Take screenshots of the portfolio sites into screenshots/ (PNG originals, git-ignored).

<slug>-desktop.png / <slug>-phone.png  the first screen of each site, for "Recent work"

Run with any Python that has Playwright (LeadForge's venv works):
    D:\\LuLu-websites\\backend\\.venv\\Scripts\\python.exe scripts/screenshots.py
Then `npm run images` makes the WebP variants.
"""
from pathlib import Path

from playwright.sync_api import sync_playwright

OUT = Path(__file__).resolve().parent.parent / "screenshots"

# slug -> (url, ms to wait for load animations)
SITES = {
    "ohio": ("https://max-lutskov.github.io/Ohio-Demo/", 2500),
    "protskov": ("https://protskovbud.vn.ua/", 1500),
    "sadovi": ("https://sadovi-mrii.com.ua/", 4500),
}

VIEWPORTS = {
    "desktop": dict(viewport={"width": 1440, "height": 900}, device_scale_factor=1),
    "phone": dict(viewport={"width": 390, "height": 844}, device_scale_factor=2,
                  is_mobile=True, has_touch=True),
}


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for name, opts in VIEWPORTS.items():
            context = browser.new_context(**opts)
            for slug, (url, wait) in SITES.items():
                page = context.new_page()
                page.goto(url, wait_until="networkidle")
                page.wait_for_timeout(wait)
                page.screenshot(path=str(OUT / f"{slug}-{name}.png"))
                print(slug, name)
                page.close()
            context.close()
        browser.close()


if __name__ == "__main__":
    main()
