const {test,expect}=require("@playwright/test")
test("Mouse Hover",async function({page})
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin",{delay:200})
    await page.getByPlaceholder("Password").fill("admin123")
    await page.locator("button[type='submit']").click()
    await page.getByAltText("profile picture",{force:true}).hover()
    await page.waitForTimeout(3000)
    //await page.getByRole("menuitem").click()
    //await page.locator("button.nav-menu-item").click()

    

})