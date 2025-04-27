import { chromium, Browser, Page } from "playwright";

const URL = "http://localhost:5173";

async function main() {

    const browser: Browser = await chromium.launch();
    const page : Page = await browser.newPage();
    await page.goto(URL);

    const fact = await page.locator("#fact").textContent();
    console.log(fact);

    const image = await page.getByRole("img").getAttribute("src");
    console.log(image);
}

main();