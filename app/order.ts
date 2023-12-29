import {AppPage} from "./abstractClass";
import {expect} from "@playwright/test";
import {MiniCart} from "./miniCart";

export class Order extends AppPage {
    public pagePath = "/order"
    private miniCart = new MiniCart(this.page)


    expectLoaded(message?: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    async expectSuccessOrder() {
        await expect(this.page.getByText("Thank you for your order.")).toBeVisible()
        await expect(this.page.locator(".order-message")).toContainText(new RegExp("Order.*is complete."))
    }

}