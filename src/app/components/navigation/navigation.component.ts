import { Component, OnInit } from '@angular/core';
import {Link} from '../../model/link';
import {Icons} from "../../model/icons";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    public title: string = 'beigestation';
    public links: Array<Link>;
    public sociLinks: Array<Icons>;

    constructor() {
        this.title = this.title.toUpperCase();
    }
    // TODO When navigating back to home, make sure on navigation is triggered and the video is reloaded.
    ngOnInit() {
        this.links = [
            // {name: 'LIVE', url: '/live'},
            // {name: 'SHOP', url: '/shop'},
            {name: 'ABOUT', url: '/about'},
        ];
    }

}
