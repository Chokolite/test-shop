import {AppPage} from "./abstractClass";
export class Product extends AppPage {
    public pagePath = "/product"
    private quantityInputField = this.page.getByPlaceholder("Product Quantity")
    private productName = this.page.locator(".item-name")
    private addToBagButton = this.page.getByRole('button', {name: "Add To Bag"})
    private stockStatus = this.page.locator(".stock")

    expectLoaded(message?: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    async addToBag() {
        await this.addToBagButton.click()
    }

    async inputQuantityNumber(quantity: number) {
        await this.quantityInputField.fill(quantity.toString())
    }

    async getStockStatus() {
        return await this.stockStatus.textContent()
    }

    async getAddToBagButtonStatus() {
        return this.addToBagButton
    }

}