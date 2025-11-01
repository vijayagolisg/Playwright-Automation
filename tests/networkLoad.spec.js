const{test,expect}=require("@playwright/test")
test("working with Load State",async function ({page})
    {
        await page.goto("https://freelance-learn-automation.vercel.app/login")
        await page.getByText("New user? Signup").click()
        await page.waitForLoadState("networkidle")
        const count=await page.locator('input[type="checkbox"]').count()
        console.log('checkbox count:',count)
        await expect(count).toBe(5)
        

    })