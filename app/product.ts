import {AppPage} from "./abstractClass";
import {StockStatus} from "../model/stockStatus";
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

    async inStock() {
        return (await this.stockStatus.textContent()) == StockStatus.InStock;
    }

    async isAddToCartDisabled() {
        return (await this.addToBagButton.isDisabled()) == true
    }

}