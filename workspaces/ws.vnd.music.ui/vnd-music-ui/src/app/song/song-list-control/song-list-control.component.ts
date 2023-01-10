import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../song.model';

import { SongService } from '../song.service';


@Component({
  selector: 'app-song-list-control',
  templateUrl: './song-list-control.component.html',
  styleUrls: ['./song-list-control.component.css']
})
export class SongListControlComponent implements OnInit {

  constructor(private service: SongService) { }

  public songs: Song[] = [];

  songs1!: Observable<Song[]>;

  ngOnInit(): void {
    this.service.getSongsObservable().subscribe(songs => this.songs = songs);
  }

}
