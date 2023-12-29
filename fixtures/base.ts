import {test} from "@playwright/test";
import {Apps} from '../app/apps'

export const baseFixture = test.extend<{ app: Apps }>({
    app: async ({page}, use) => {
        const app = new Apps(page);
        await use(app);
    },
});
export type DefaultUserOption = {
    defaultUser: {
        email: string,
        password: string
    }
}

export const loggedUserFixture = baseFixture.extend<DefaultUserOption & { app: Apps }>({
    defaultUser: [
        {
            email: 'John123.Dou123@test.com',
            password: 'qwerty'
        },
        {
            option: true
        }
    ],
    app: async ({ app, defaultUser }, use) => {
        await app.login.open();
        await app.login.login(defaultUser.email, defaultUser.password);
        await app.dashboard.expectLoaded();

        await use(app);
    },
});
