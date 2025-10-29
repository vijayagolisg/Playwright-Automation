const {test,expect}=require('@playwright/test')
test("Handle Dropdown",async function ({page})
{
    await page.goto("https://letcode.in/dropdowns")
    await page.locator('#fruits').selectOption({label:'Banana'})
    await page.locator('#superheros').selectOption(['Batman',"Iron Man"])
    await page.locator('#lang').selectOption({value:'py'})
    const country=await page.locator('#country').selectOption({index:6})
    await console.log("country selected:"+country)
    await expect(country.includes("India")).toBeTruthy()

})

