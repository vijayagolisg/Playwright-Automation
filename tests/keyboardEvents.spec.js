const{test,expect}=require("@playwright/test")
test("keyboard events in playwright",async function ({page})
{
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").fill("Playwright Keyword Events")
    await page.keyboard.press("Enter")
})
test("keyboard events multiple",async function ({page})
{
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").fill("Playwright Keyword Events")
    await page.keyboard.press("Meta+A")
    await page.keyboard.press("Meta+C")
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Meta+V")
    

})
test.only("keyboard events using Arrow Left",async function ({page})
{
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").fill("Automation Tools!")
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")
    for(let i=0;i<5;i++)
    {
        await page.keyboard.press("ArrowLeft")
    }

    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")
    

})
