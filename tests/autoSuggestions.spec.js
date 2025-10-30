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
test.only("select item",async function ({page})
    {
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").fill("playwrite")
    await page.waitForSelector("li[role='presentation']")
    const elements=await page.$$("li[role='presentation']")
    await page.waitForTimeout(2000)
    for (let i=0;i<elements.length;i++)
    {
        const text=await elements[i].textContent()
        if(text.includes("playwright testing"))
        {
            await elements[i].click()
            break;
        }
    }

})
