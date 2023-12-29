import {AppPage} from "./abstractClass";

export class Product extends AppPage {
    public pagePath = "/product"
    public quantityInputField = this.page.getByPlaceholder("Product Quantity")
    public productName = this.page.locator(".item-name")
    public addToBagButton = this.page.getByRole('button', {name: "Add To Bag"})
    expectLoaded(message?: string): Promise<void> {
        return Promise.resolve(undefined);
    }

}