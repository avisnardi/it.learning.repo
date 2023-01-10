import { Component, OnInit } from '@angular/core';
import { Song } from '../song.model';

@Component({
  selector: 'app-song-control',
  templateUrl: './song-control.component.html',
  styleUrls: ['./song-control.component.css']
})
export class SongControlComponent implements OnInit {

  constructor() { }

  private song: Song | undefined ;

  ngOnInit(): void {
  }

}
