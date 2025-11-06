const {test,expect}=require("@playwright/test")
const LoginPage=require("../pages/loginPage") 
const HomePage=require("../pages/homePage")
test("Login To Application Using POM",async function ({page})
    {
        await page.goto("https://freelance-learn-automation.vercel.app/login")
        const loginpage=new LoginPage(page)
        await loginpage.loginToApplication()
        //await page.waitForLoadState("networkidle")
        const homepage=new HomePage(page)
        await homepage.verifyManageOption()
        await homepage.logoutApplication()
        await loginpage.verifySignin()

     
    })