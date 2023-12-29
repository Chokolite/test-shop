import {AppPage} from "./abstractClass";

export class Shop extends AppPage {
    public pagePath = "/shop";
    public priceRangeMinValueSlider = this.page.getByRole('slider').nth(0)
    public priceRangeMaxValueSlider = this.page.getByRole('slider').nth(1)


    expectLoaded(message?: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    async openProduct(itemName: string) {
        await this.page.locator('.item-name', {hasText: itemName}).click()
    }
}