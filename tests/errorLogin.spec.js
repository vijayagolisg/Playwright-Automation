import {test,expect} from "@playwright/test"
test("Error Login",async function ({page}) 
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("vijaya",{delay:200})
    await page.locator('input[name="password"]').fill("adminhello",{delay:200})
    await page.locator('button[type="submit"]').click()
    await expect(page.getByText("Invalid credentials")).toBeVisible()
   
    
   
})
