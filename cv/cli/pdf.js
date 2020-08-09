const puppeteer = require("puppeteer")

if (module.parent === null)
  main()

async function main() {
  const cwd = process.cwd()
  , browser = await puppeteer.launch()
  , page = await browser.newPage()

  await page.goto(`file://${cwd}/Andrii_Kirmas.html`, {
    waitUntil: "networkidle2"
  });
  await page.setViewport({ width: 1680, height: 1050 });
  await page.pdf({
    path: `${cwd}/Andrii_Kirmas.pdf`,
    format: "A4",
    printBackground: true
  });

  await browser.close();
}