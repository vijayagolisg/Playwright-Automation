const{test,expect}=require("@playwright/test")
test("file upload",async function ({page})
{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("/users/test/desktop/babyimg.jpg")
    await page.locator("#file-submit").click()
    await expect(page.locator('h3')).toContainText('File Uploaded!')

})