import {baseFixture} from "../fixtures/base";
import {UserHelper} from "../helpers/user-helper";

baseFixture('login', async ({app}) => {
    await app.login.open()
    const userHelper = new UserHelper()
    const defaultUser = userHelper.defaultUser()

    await app.login.login(defaultUser.email, defaultUser.password)
    await app.login.expectToBeLogged(defaultUser.firstName)
})