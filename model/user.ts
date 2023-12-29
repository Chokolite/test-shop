
export default class User {
    public readonly firstName: string
    public lastName: string
    public readonly email: string
    public readonly password: string

    constructor(firstName?: string, lastName?: string, email?: string, password?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}