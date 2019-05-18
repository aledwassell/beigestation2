import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input() video = '';
  @Output() videoSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}