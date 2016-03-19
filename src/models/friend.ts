/**
 * Created by amnon on 19/03/2016.
 */
export class Friend {

    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    myToString() {
        return this.firstName;
    }
}