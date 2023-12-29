import {faker} from "@faker-js/faker";
import User from "../model/user";

export class UserHelper {
    createRandomUserWithCredentials() {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const email = `${firstName}.${lastName}@test.com`
        const password = "qwerty"
        return new User(firstName, lastName, email, password);
    }

    public defaultUser() {
        return new User("John", "Dou", "John123.Dou123@test.com", "qwerty")
    }
}