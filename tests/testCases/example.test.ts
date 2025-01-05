import { NavigationBelt, NavigationFill } from "../pages/page";

const navigationBelt = new NavigationBelt();
const navigationFill = new NavigationFill();

fixture("My first test fixture")
    .page("https://www.amazon.in/")
    .beforeEach(async (t) => {
        await t.maximizeWindow()
})

test("login functionality", async (t) => {
  await navigationFill.searchProduct();
});
test("verify dropdown", async (t) => {
  await navigationFill.verifyDropDown();
});
test('printdropdown items text', async (t)=>{
    await navigationFill.printDropDownText()
})