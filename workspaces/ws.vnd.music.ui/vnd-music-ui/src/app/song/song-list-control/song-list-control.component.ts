import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {MatTableModule} from '@angular/material/table';

import { Song } from '../song.model';

import { SongService } from '../song.service';


@Component({
  selector: 'app-song-list-control',
  templateUrl: './song-list-control.component.html',
  styleUrls: ['./song-list-control.component.css']
})
export class SongListControlComponent implements OnInit {

  constructor(private service: SongService) { }

  songsTmp: Song[] = [
    {id: '1', name: 'Asa Branca', composer: 'Luiza Gonzaga'},
    {id: '2', name: 'Abri a Porta', composer: 'Dominguinhos'}
  ];

  displayedColumns = ['id', 'name', 'composer']

  songs: Song[] = [];

  songs1!: Observable<Song[]>;

  ngOnInit(): void {
    this.service.getSongsObservable().subscribe(songs => this.songs = songs);
  }

}
