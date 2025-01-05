import { Selector, t } from "testcafe";

export class NavigationBelt {
  container = Selector("div#navbar>div#nav-belt");
}

export class NavigationFill extends NavigationBelt {
  navFill = this.container.find("div.nav-fill");
  navBarForm = this.navFill.find("#nav-search-bar-form");
  searchInput = this.navBarForm.find("input[type='text']");
  searChButton = this.navFill.find("input[type='submit']");
  dropDownCard = this.navBarForm.find('#nav-search-dropdown-card')
  dropDownSelectCard = this.dropDownCard.find('select#searchDropdownBox')
  dropDownItems = this.dropDownSelectCard.find('option')

async searchProduct() {
    await t.expect(this.navFill.visible).ok();
    await t.typeText(this.searchInput, "Mens t-Shirt");
    await t.expect(this.searChButton.visible).ok();
    await t.click(this.searChButton);
  }
  async verifyDropDown(){
    const dropDownItemsLenth = await this.dropDownItems.count
    await t
        .expect(this.navBarForm.visible).ok()
        .click(this.dropDownCard)
        .expect(this.dropDownSelectCard.visible).ok()   
        .expect(dropDownItemsLenth).eql(46)
  }
  async printDropDownText(){
    const dropDownItemsLenth = await this.dropDownItems.count
    await t.click(this.dropDownCard)
    for(let i =0; i<dropDownItemsLenth; i++){
        console.log(await this.dropDownItems.nth(i).textContent);
    }    
  }
}


