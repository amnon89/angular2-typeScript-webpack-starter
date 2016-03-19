import {Injectable} from "angular2/core";
import {FriendsService} from "../friendsService";
import {Friend} from "../../models/friend";
import {FriendsMockDAO} from "../../DAOs/mock/friendsMockDAO";

/**
 * Created by amnon on 19/03/2016.
 */
@Injectable()
export class FriendsServiceImpl implements FriendsService {

    private friendsDAO: FriendsMockDAO;

    constructor(friendsDAO: FriendsMockDAO) {
        this.friendsDAO = friendsDAO;
    }

    search(query: string): Friend[] {
        return this.friendsDAO.search(query);
    }
}