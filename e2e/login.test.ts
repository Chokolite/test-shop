import {baseFixture} from "../fixtures/base";
import {UserHelper} from "../helpers/user-helper";

baseFixture('login', async ({login}) => {
    await login.open()
    const userHelper = new UserHelper()
    const defaultUser = userHelper.defaultUser()

    await login.login(defaultUser.email, defaultUser.password)
    await login.expectToBeLogged(defaultUser.firstName)
})