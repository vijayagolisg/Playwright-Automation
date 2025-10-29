const{test,expect}=require("@playwright/test")
test("select data",async function({page})
{
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").fill("iphone")
    await page.waitForSelector("li[role='presentation']")
    await page.keyboard.press("ArrowDown",{delay:400})
    await page.keyboard.press("ArrowDown",{delay:200})
    await page.keyboard.press("Enter")

})
