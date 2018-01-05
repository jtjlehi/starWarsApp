import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CharacterListComponent } from '../character-list/character-list.component';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { CharacterListFilterPipe } from '../character-list/character-list-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterListFilterPipe
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
