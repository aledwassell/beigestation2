import {Injectable} from '@angular/core';
import {Video} from "../model/video";
import { HttpClient, HttpResponse } from '@angular/common/http';
// import {VIDEOS} from "../videos/videos";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ServerConnectorService {
  private serverUrl = 'https://us-central1-beigestation-220020.cloudfunctions.net/videos';
  private _youtubeURL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBI4FvdvY1AFMzKYbW7XFFAQNqB9Py2dWg&channelId=UC2hl9xJ9ol2Yb6XDI2XwEyA&part=snippet,id&order=date&maxResults=20';
  constructor(private http: HttpClient) {
  }
  getVideosDetails(): Observable<Video[]>{
    return this.http.get<any[]>(this._youtubeURL);
  }
  resolve(){
    console.log('resolved video details')
  }
}