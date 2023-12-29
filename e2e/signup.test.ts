import {baseFixture} from "../fixtures/base";
import {UserHelper} from "../helpers/user-helper";

baseFixture('Signup', async ({app}) => {
    await app.signup.open()
    const userHelper = new UserHelper()
    const user = userHelper.createRandomUserWithCredentials()

    await app.signup.signup(user.email, user.firstName, user.lastName, user.password)
    await app.signup.expectToBeRegistered()
})