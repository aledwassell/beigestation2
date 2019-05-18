import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    AfterContentInit,
    ElementRef,
    OnChanges,
    SimpleChanges,
    OnDestroy,
} from '@angular/core';
declare global {
  interface Window { onYouTubeIframeAPIReady: any; YT: any; }
}
@Component({
  selector: 'app-youtube-player',
  template: `
    <div id="youtube-player"></div>
  `,
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit, OnChanges {
    @Input() videoId = 'tUdQ-33k2tw';
    @Input() height = 270;
    @Input() width = 367;
    @Input() protocol: string = this.getProtocol();
    @Input() playerVars: any;

    @Output() ready = new EventEmitter();
    // state change: send the YT event with its state
    @Output() change = new EventEmitter();

    private player;
    
    ngOnInit() {
      const doc = window.document;
      const tag = doc.createElement('script');
      tag.type = 'text/javascript';
      tag.src = 'https://www.youtube.com/iframe_api';
      doc.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = () => {
        this.player = new window.YT.Player('youtube-player', {
          height: this.height,
          width: this.width,
          videoId: this.videoId,
          events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onPlayerStateChange
          },
          playerVars: {'autoplay': 1, 'rel': 0, 'controls': 0},
        });
      }
    }

    ngAfterViewInit(){
      window.onYouTubeIframeAPIReady();
    }

    ngOnChanges(changes: SimpleChanges) {
      if (changes.videoId.currentValue !== changes.videoId.previousValue) {
        this.videoId = changes.videoId.currentValue;
      }
      if(this.player){
        this.destroyVideo();
        window.onYouTubeIframeAPIReady();
      }
    }

    ngOnDestroy(){
      this.destroyVideo()
    }

    destroyVideo(){
      this.player.destroy();
      this.player = {};
    }

    // The API calls this function when the player's state changes.
    onPlayerStateChange(event) {
    }

    // The API will call this function when the video player is ready
    onPlayerReady(event) {
      event.target.playVideo();
    }

    getProtocol() {
      const hasWindow = window && window.location;
      const protocol = hasWindow
        ? window.location.protocol.replace(':', '')
        : 'http';
      return protocol;
    }
}