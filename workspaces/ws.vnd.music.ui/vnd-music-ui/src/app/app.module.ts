import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongControlComponent } from './song/song-control/song-control.component';
import { SongListControlComponent } from './song/song-list-control/song-list-control.component';
import { SongService } from './song/song.service';

@NgModule({
  declarations: [
    AppComponent,
    SongControlComponent,
    SongListControlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
