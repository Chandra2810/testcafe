import { Selector, t } from "testcafe";
import { NavigationMain } from "../pages/navigationMain";

const navigationMain = new NavigationMain()

fixture('Testing the navigation main banner elements')
    .page('https://www.amazon.in/')
    .beforeEach(async (t)=>{
        await t.maximizeWindow()
    })
test('get div under main belt', async (t)=> {
    navigationMain.getDiv()    
})
test.only('get a href tags', async (t)=> {
    await navigationMain.getATags()    
    
})