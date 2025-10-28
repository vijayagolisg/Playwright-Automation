const {test,expect}=require('@playwright/test')
test('Take a screenshot of an element',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill("Admin",{delay:200})
    await page.locator('input[name="password"]').fill("abcd123",{delay:200})
    await page.click('button[type="submit"]')
    //locate the error MSG
    const errorMsg=page.locator('.oxd-alert-content-text')
    //wait for it to appear
    await errorMsg.waitFor()
    //take screenshot
    await errorMsg.screenshot({path:'screenshots/errorMessages.png'})
    await expect(errorMsg).toHaveText("Invalid credentials");


})