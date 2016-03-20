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
    styles:     [`
                .headerBar {
                    width: 100%;
                    background-color: black;
                    height: 62px;
                    color: white
                }

                .logo {
                    float: right;
                    width: 121px;
                    height: 20px;
                    margin-top: 21px;
                    margin-right: 21px;
                }

                .searchComponent {
                    display: inline-block;
                    margin-top: 19px;
                    margin-left: 19px;
                }`],
    directives: [Search],
    providers:  [FriendsServiceImpl],
    template:   `
                <div class="headerBar">
                    <search (onSearch)="search($event)" class="searchComponent"></search>
                    <span>
                        <img [src]=lollawayLogo class="logo">
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