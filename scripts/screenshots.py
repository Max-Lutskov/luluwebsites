"""Take screenshots of the portfolio sites into screenshots/ (PNG originals, git-ignored).

<slug>-desktop.png / <slug>-phone.png  first screen (hero of the studio site)
<slug>-desktop-tall.png  the top of the whole page, scrolled inside the frame in "Recent work"

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

# How much of the page the tall shots keep, in CSS px
TALL_HEIGHT = 2400


def load_lazy_images(page) -> None:
    """Scroll down step by step so lazy images load, then back to the top."""
    height = page.evaluate("document.documentElement.scrollHeight")
    step = page.viewport_size["height"] // 2
    for y in range(0, height, step):
        page.evaluate(f"window.scrollTo(0, {y})")
        page.wait_for_timeout(150)
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(800)
    # A full-page shot paints fixed bars (mobile "Call / Get a quote") in the middle of the page: hide the bottom ones
    page.evaluate("""() => {
        for (const el of document.querySelectorAll('body *')) {
            const s = getComputedStyle(el)
            if ((s.position === 'fixed' || s.position === 'sticky') && el.getBoundingClientRect().top > innerHeight / 2)
                el.style.visibility = 'hidden'
        }
    }""")


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

                if name == "desktop":
                    load_lazy_images(page)
                    height = min(page.evaluate("document.documentElement.scrollHeight"), TALL_HEIGHT)
                    page.screenshot(path=str(OUT / f"{slug}-desktop-tall.png"), full_page=True,
                                    clip={"x": 0, "y": 0, "width": 1440, "height": height})
                print(slug, name)
                page.close()
            context.close()
        browser.close()


if __name__ == "__main__":
    main()
