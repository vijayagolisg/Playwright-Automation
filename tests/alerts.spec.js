const{test,expect}=require("@playwright/test")
test("JS Alert",async function ({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog",async(dialog)=>
    {
        await expect(dialog.type()).toContain("alert")
        await expect(dialog.message()).toContain("I am a JS Alert")
        await console.log("message:"+dialog.message())
        await dialog.accept()

    })  
    await page.getByRole('button',{name:'Click for JS Alert'}).click()
    await page.waitForTimeout(2000)
})
test("JS Confirm",async function ({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog",async(dialogwindow)=>
    {
        await expect(dialogwindow.type()).toContain("confirm")
        await expect(dialogwindow.message()).toContain("I am a JS Confirm")
        await console.log("message:"+dialogwindow.message())
        await dialogwindow.dismiss()

    }) 

    await page.getByRole('button',{name:'Click for JS Confirm'}).click()
    await page.waitForTimeout(2000)
})
test("JS Prompt",async function ({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog",async(dialogwindow)=>
    {
        await expect(dialogwindow.type()).toContain("prompt")
        await expect(dialogwindow.message()).toContain("I am a JS prompt")
        await console.log("message:"+dialogwindow.message())
        await dialogwindow.accept("Vijaya")


    }) 
    await page.getByRole('button',{name:'Click for JS Prompt'}).click()
    await page.waitForTimeout(5000)
})
