const {test,expect}=require("@playwright/test")
const data=JSON.parse(JSON.stringify(require("../testdata.json")))
test("login to application",async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("#email1").fill(data.username)
    await page.locator("#password1").fill(data.password)
   
})