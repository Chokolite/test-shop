import {AppPage} from "./abstractClass";
import {expect} from "@playwright/test";

export class Dashboard extends AppPage {
    public pagePath = "/dashboard"
    public accountDetailsButton = this.page.getByRole('link', {name: "Account Details"})
    public accountSecurityButton = this.page.getByRole('link', {name: "Account Security"})
    public addressButton =  this.page.getByRole('link', {name: "Address"})
    public ordersButton = this.page.getByRole('link', {name: "Orders"})
    public wishlistButton = this.page.getByRole('link', {name: "Wishlist"})
    public supportButton = this.page.getByRole('link', {name: "Support"})
    public saveChangesButton = this.page.getByRole('button', {name: "Save changes"})
    public firstNameInputField = this.page.getByPlaceholder("Please Enter Your First Name")
    public lastNameInputField = this.page.getByPlaceholder("Please Enter Your Last Name")
    public phoneNumberInputField = this.page.getByPlaceholder("Please Enter Your Phone Number")

    async expectLoaded(message = "Expected dashboard to be loaded"): Promise<void> {
        await expect(this.page.getByRole('heading', { name: 'Account Details' })).toBeVisible()
    }

}