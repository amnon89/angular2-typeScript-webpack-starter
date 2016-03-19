import {Injectable} from "angular2/core";
import {Friend} from "../../models/friend";

/**
 * Created by amnon on 19/03/2016.
 */
@Injectable()
export class FriendsMockDAO {

    private FRIENDS_LIST = [
        {'firstName': 'Amnon', 'lastName': 'Altony'},
        {'firstName': 'Shiran', 'lastName': 'Asher'},
        {'firstName': 'Amit', 'lastName': 'Bar-Hod'},
        {'firstName': 'Edan', 'lastName': 'Maday'},
        {'firstName': 'Royi', 'lastName': 'Pressburger'},
    ];

    public search(query: string): Friend[] {
        let toReturn = [];

        let searchResult = this.FRIENDS_LIST.filter(function( friend ) {
            return friend.firstName.toLowerCase().indexOf(query.toLowerCase()) > -1 || friend.lastName.toLowerCase().indexOf(query.toLowerCase()) > -1;
        } );

        for(let x in searchResult) {
            toReturn.push(new Friend(searchResult[x].firstName, searchResult[x].lastName));
        }

        return toReturn;
    }
}