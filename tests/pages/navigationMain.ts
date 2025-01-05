import { Selector, t } from "testcafe";

export class NavigationMain {
  container = Selector("#nav-main");
  navMainDiv = this.container.find("div");
  navFillContainer = this.container.find(".nav-fill");
  navXshopContainer = this.navFillContainer.find("#nav-xshop-container");
  navATags = this.navXshopContainer.find("a");

  async getDiv() {
    const divCount = await this.navMainDiv.count;
    console.log(`count : ${divCount}`);
  }

  async getATags(){
    const aTagCount = await this.navATags.count;
    for(let i=0; i<aTagCount; i++){
        const hrefValue = await this.navATags.nth(i).getAttribute('href')
        if(hrefValue === '/Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby'){
            await t.click(this.navATags.nth(i))
        }
    }
    
  }
}