/**
 * Created by amnon on 18/03/2016.
 */
import {Component} from "angular2/core";
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";


@Component({
    selector:   'search',
    template:   `
        <span style="margin-top: 13px; margin-left: 30px;">
            <img [src]=searchIcon style="height: 30px; vertical-align: bottom; margin-top: 10px;" (click)="onSearchIconClick()">
            <input type="text"
                #searchTextField
                placeholder="Search for Artists & Friends"
                *ngIf="searchMode"
                (keyup.enter)="onSearchClicked(searchTextField.value)"
                style="border-radius: 25px; height: 25px; width: 250px; border: none; outline: none; text-indent: 10px;"
            >
        </span>
        `,

})
export class Search {

    searchIcon = 'assets/img/searchIcon.png';

    @Output() onSearch = new EventEmitter();

    private searchMode: boolean;

    constructor() {
        this.searchMode = false;
    }

    private onSearchIconClick(): void {
        this.searchMode = !this.searchMode;
    }

    private onSearchClicked(query: string): void {
        this.onSearch.emit(query);
    }
}