import {AppPage} from "./abstractClass";

export class Home extends AppPage {
    public pagePath = ``

    expectLoaded(message?: string): Promise<void> {
        return Promise.resolve(undefined);
    }

}