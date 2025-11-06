const {expect}=require("@playwright/test")
class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.username=page.locator("#email1")
        this.password=page.locator("#password1")
        this.loginbutton=page.locator("button[type='submit']")
        this.msg=page.locator('h1',{hasText:"Learn Automation Courses"})
    }
    async loginToApplication()
    {
        await this.username.fill("admin@email.com")
        await this.password.fill("admin@123")
        await this.loginbutton.click()
    }
    async verifySignin()
    {
        await expect(this.msg).toBeVisible()
    
    }

    }
module.exports=LoginPage
