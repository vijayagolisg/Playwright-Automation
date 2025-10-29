const {test,expect}=require("@playwright/test")
test("Valid Login",async function ({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin",{delay:200})
    await page.locator('input[name="password"]').fill("admin123",{delay:200})
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL(/dashboard/);
    //await page.getByAltText("profie picture").click()
    await page.locator('.oxd-userdropdown-img').click()
    await page.getByText("Logout").click()

})
