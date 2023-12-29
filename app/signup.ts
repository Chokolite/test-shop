import {AppPage} from "./abstractClass";
import {expect} from "@playwright/test";

export class Signup extends AppPage {
    public pagePath = '/register';
    private emailInputField = this.page.getByRole('main').getByPlaceholder('Please Enter Your Email')
    private firstNameInputField = this.page.getByPlaceholder('Please Enter Your First Name')
    private lastNameInputField = this.page.getByPlaceholder('Please Enter Your Last Name')
    private passwordInputField = this.page.getByPlaceholder('Please Enter Your Password')
    private checkBoxSubscribeToNewsletter = this.page.getByText('Subscribe to newsletter');
    private signUpButton = this.page.getByRole('button', {name: "Sign Up"})

    async expectLoaded(message = "Expect register page is loaded"): Promise<void> {
        await expect(this.emailInputField).toBeVisible()
        await expect(this.firstNameInputField).toBeVisible()
    }

    async signup(email: string, firstName: string, lastName: string, password: string, isSubscribe?: false) {
        await this.emailInputField.fill(email)
        await this.firstNameInputField.fill(firstName)
        await this.lastNameInputField.fill(lastName)
        await this.passwordInputField.fill(password)
        if (isSubscribe) {
            await this.checkBoxSubscribeToNewsletter.click()
        }
        await this.signUpButton.click()
    }

    async expectToBeRegistered() {
        await expect(this.page.locator('.notification-title')).toContainText('You have signed up successfully! You will be receiving an email as well. Thank you!')
    }
}