import {faker} from "@faker-js/faker";
import User from "../model/user";
import {Constants} from "../fixtures/constants/constants";

export class UserHelper {
    public createRandomUserWithCredentials() {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const email = `${firstName}.${lastName}@test.com`
        const password = "qwerty"
        return new User(firstName, lastName, email, password);
    }

    public defaultUser() {
        return new User(Constants.DEFAULT_FIRST_NAME, Constants.DEFAULT_LAST_NAME, Constants.DEFAULT_EMAIL, Constants.DEFAULT_PASSWORD)
    }
}