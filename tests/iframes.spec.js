const{test,expect}=require("@playwright/test")
test("Handle Iframes",async function({page}) 
{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    const iframe=await page.frameLocator("frame[name='packageListFrame']")
    await iframe.getByText('java.applet').click()
    await page.waitForTimeout(3000)
})