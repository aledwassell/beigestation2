import {Component, OnInit} from '@angular/core';
import {Video} from "../../model/video";
import {ServerConnectorService} from "../../services/server-connector.service";
import { Observable, from } from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
    public videoData$: Observable<Video[]>;
    videoId = 'etC2Zp-9Awg';
    constructor(private service: ServerConnectorService) {
    }

    ngOnInit() {
      this.videoData$ = this.service.getVideosDetails();
      console.log('inited');
    }

    setVideoId(id: string){
      this.videoId = id;
    }
}
