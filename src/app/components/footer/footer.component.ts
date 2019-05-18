import {Component, OnInit} from '@angular/core';
import {Icons} from "../../model/icons";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    title: string = 'beigestation';
    public sociLinks: Array<Icons> = [
        {url: '', icon: ''},
        {url: '', icon: ''},
    ]

    constructor() {
    }

    ngOnInit() {
        this.title = this.title.toUpperCase();
    }

}
