import {Component} from "./abstractClass";
import {expect} from "@playwright/test";

export class MiniCart extends Component {
    private placeOrderButton = this.page.getByRole('button', {name: "Place Order"})
    private quantityNumber = this.page.locator(".value.quantity")
    private trashButton = this.page.locator('button[aria-label*=\'remove\']')

    async expectLoaded(message = "Expected mini cart to be opened"): Promise<void> {
        await expect(this.page.locator('.mini-cart')).toBeVisible()
    }

    async acceptOrder() {
        await this.placeOrderButton.click()
    }

    async expectQuantity(quantity: number) {
        await expect(this.quantityNumber).toHaveText(quantity.toString())
    }

    async removeFirstProduct() {
        await this.trashButton.nth(0).click()
    }

    async isMiniCartEmpty() {
        return (await this.page.getByText('Your shopping cart is empty').isVisible())
    }

    async clearCart() {
        let allTrashButtonsArray = await this.trashButton.all()
        while (allTrashButtonsArray.length > 0) {
            await allTrashButtonsArray[0].click()
            allTrashButtonsArray = await this.trashButton.all()
        }
    }

}