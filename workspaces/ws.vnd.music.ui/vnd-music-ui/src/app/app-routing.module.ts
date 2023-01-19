import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SongListControlComponent } from './song/song-list-control/song-list-control.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'song', component: SongListControlComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
