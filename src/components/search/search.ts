/**
 * Created by amnon on 18/03/2016.
 */
import {Component} from "angular2/core";
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";


@Component({
    selector:   'search',
    styles: [`
        .searchButton {
            height: 24px;
            width: 20px;
        }

        .searchField {
            border-radius: 25px;
            height: 24px;
            width: 250px;
            border: none;
            outline: none;
            text-indent: 1em;
            vertical-align: top;
        }

        .searchWrapper {
            width: 252px;
            height: 26px;
            margin-left: 10px;

        }
    `],
    template:   `
        <span>
            <img [src]=searchIcon class="searchButton" (click)="onSearchIconClick()">
            <div class="slideWrapper searchWrapper">
                <input type="text"
                    *ngIf="firstTimeClicked"
                    #searchTextField
                    (keyup.enter)="onSearchClicked(searchTextField.value)"
                    [ngClass]="{slideIn: searchMode,
                                searchFieldSlideIn: searchMode,
                                slideOut: searchMode == false}"
                    class="searchField"
                    placeholder="Search for Artists & Friends">
            </div>
        </span>
        `
})
export class Search {

    searchIcon = 'assets/img/searchIcon.png';

    @Output() onSearch = new EventEmitter();

    private searchMode: boolean;
    private firstTimeClicked: boolean;

    constructor() {
        this.searchMode = false;
        this.firstTimeClicked = false;
    }

    private onSearchIconClick(): void {
        this.firstTimeClicked = true;
        this.searchMode = !this.searchMode;
    }

    private onSearchClicked(query: string): void {
        this.onSearch.emit(query);
    }
}