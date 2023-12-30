import { Constants } from './constants/constants';
import { baseFixture } from './base';

export type DefaultUserOption = {
  defaultUser: {
    email: string,
    password: string
  }
  loginAsCommonUser: () => Promise<void>;
}

export const loggedUserFixture = baseFixture.extend<DefaultUserOption>({
  defaultUser: [
    {
      email: Constants.DEFAULT_EMAIL,
      password: Constants.DEFAULT_PASSWORD
    },
    {
      option: true
    }
  ],
  loginAsCommonUser: async ({login, dashboard, defaultUser}, use): Promise<void> => {
    await use(async (): Promise<void> => {
      await login.open();
      await login.login(defaultUser.email, defaultUser.password);
      await dashboard.expectLoaded();
    });
  },
});