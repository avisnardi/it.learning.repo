import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../song.model';

@Component({
  selector: 'app-song-control',
  templateUrl: './song-control.component.html',
  styleUrls: ['./song-control.component.css']
})
export class SongControlComponent implements OnInit {

  constructor() { }

  @Input()
  song!: Song;

  ngOnInit(): void {
  }

}
