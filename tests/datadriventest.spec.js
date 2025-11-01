const{test,expect}=require("@playwright/test")
const testdata=JSON.parse(JSON.stringify(require("../testlogin.json")))
/*test.describe("Data Driven test",()=>
{
    for(const data of testdata)
    {
        test("login with user id ${data.id}",async ({page})=>
    {
        await page.goto("https://freelance-learn-automation.vercel.app/login")
        await page.locator("#email1").fill(data.username)
        await page.locator("#password1").fill(data.password)
   
})

}
        })*/

