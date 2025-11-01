const{test,expect}=require("@playwright/test")
const { promises } = require("dns")
test("working wuth multiple tabs",async function({browser})
{
    const context=await browser.newContext()
    const page1=await context.newPage()
    //open first page
    await  page1.goto("https://freelance-learn-automation.vercel.app/login")
    console.log('opened first tab',await page1.title())
    await page1.waitForTimeout(3000)
    //open second page
    const page2=await context.newPage()
    await page2.goto("https://playwright.dev/")
    console.log('opened second tab',await page2.title())
    await page2.waitForTimeout(3000)
    //switch back to first tab
    await page1.bringToFront()
    console.log("switched back to first")
    await expect(page1).toHaveTitle("Learn Automation Courses")



})