import {baseFixture} from "../fixtures/base";
import {UserHelper} from "../helpers/user-helper";

baseFixture('Signup', async ({signup}) => {
    await signup.open()
    const userHelper = new UserHelper()
    const user = userHelper.createRandomUserWithCredentials()

    await signup.signup(user.email, user.firstName, user.lastName, user.password)
    await signup.expectToBeRegistered()
})