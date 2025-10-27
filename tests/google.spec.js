const {test,expect}=require('@playwright/test')
test("Verify Application Title", async ({page})=>{
    await page.goto("https://www.google.com/")
    const url=await page.url()
    console.log("url is:"+url)
    const title=await page.title()
    console.log("Title is:"+title)
    await page.waitForTimeout(5000)
    await expect(page).toHaveTitle("Google")
    
})