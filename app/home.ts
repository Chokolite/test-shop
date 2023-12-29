import {AppPage} from "./abstractClass";
import {Header} from "./component/header";
import {expect} from "@playwright/test";

export class Home extends AppPage {
    public pagePath = `/`
    public header = new Header(this.page)
    public homepageCarousel = this.page.locator('.homepage .home-carousel')
    async expectLoaded(message = "Expected homepage to be open and visible carousel"): Promise<void> {
        await expect(this.homepageCarousel).toBeVisible();
    }

}