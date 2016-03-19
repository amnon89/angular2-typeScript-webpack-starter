/**
 * Created by amnon on 18/03/2016.
 */
import {Component} from "angular2/core";
import {Search} from "../search/search";
import {FriendsServiceImpl} from "../../services/impl/friendsServiceImpl";
import {FriendsMockDAO} from "../../DAOs/mock/friendsMockDAO";
import {Friend} from "../../models/friend";

@Component({
    selector:   'header',
    directives: [Search],
    providers: [FriendsServiceImpl],
    template:   `
    <div style="width: 100%; background-color: black; height: 55px; color: white">
        <search (onSearch)="search($event)"></search>
        <span>
            <img [src]=lollawayLogo style="float: right; width: 121px; height: 20px; margin-top: 17px; margin-right: 17px;">
        </span>
    </div>
    `
})
export class Header {

    lollawayLogo = 'assets/img/lollawayLogo.png';

    private friendsService: FriendsServiceImpl;

    constructor(friendsService: FriendsServiceImpl) {
        this.friendsService = friendsService;
    }

    private search(query: string) {
        let searchResult: Friend[] = this.friendsService.search(query);
        console.log(searchResult);
    }
}