import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs: Song[] = [
    {id: '1', name: 'Spring Love', composer: 'Steve B'},
    {id: '2', name: 'Eu só quero um xodó', composer: 'Dominguinhos'}, 
    {id: '3', name: 'Esperando na Janela', composer: 'Targino Gondim'},
    {id: '99', name: 'Minha Musica', composer: 'Ale'}
    ,];
    
    public songs1:  Song[] = [];

    private songURL: string = 'http://localhost:8080/song';

    constructor(
      private http: HttpClient) { }


  getSongsObservable() {
    console.log('1>>>');
    return this.http.get<Song[]>(this.songURL);
  }


}
