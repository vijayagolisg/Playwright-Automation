const {expect}=require("@playwright/test")
class HomePage
{
    constructor(page)
    {
        this.page=page
        this.manage=page.locator("span:has-text('Manage')")
        //this.manage=page.locator("span",{hasText:'Manage'})
        this.menu=page.getByAltText("menu")
        this.logoutoption=page.locator("button.nav-menu-item")

    }
    async verifyManageOption()
    {
        await expect(this.manage).toBeVisible({timeout:10000})

    }
    async logoutApplication()
    {
        await this.menu.click()
        await this.logoutoption.click()
    }
}
module.exports=HomePage