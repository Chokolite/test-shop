import {Component} from "../abstractClass";
import {expect} from "@playwright/test";

export class Header extends Component {
    public shopButton = this.page.getByRole('link', {name: 'Shop'})
    public welcomeButton = this.page.locator('.dropdown').getByText('Welcome!')
    public loginButton = this.page.getByRole('menuitem', {name: 'Login'});
    public signupButton = this.page.getByRole('menuitem', {name: 'Sign Up'});

    async expectLoaded(message?: string): Promise<void> {
        await expect(this.shopButton).toBeVisible();
    }
}