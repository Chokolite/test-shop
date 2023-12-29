import {AppPage} from "./abstractClass";
import {expect} from "@playwright/test";

export class Login extends AppPage {
    public pagePath = "/login"
    private loginButton = this.page.getByRole('button', {name: 'Login'})
    private emailInputField = this.page.getByRole('main').getByPlaceholder('Please Enter Your Email')
    private passwordInputField = this.page.getByPlaceholder('Please Enter Your Password')

    async expectLoaded(message = "Expect login page to be loaded"): Promise<void> {
        await expect(this.loginButton).toBeVisible()
        await expect(this.emailInputField).toBeVisible()
        await expect(this.passwordInputField).toBeVisible()
    }

    async login(email: string, password: string) {
        await this.emailInputField.fill(email)
        await this.passwordInputField.fill(password)
        await this.loginButton.click()
    }

    async expectToBeLogged(username: string) {
        await expect(this.page.locator('.notification-title')).toContainText(`Hey ${username}, Welcome Back!`)
    }

}