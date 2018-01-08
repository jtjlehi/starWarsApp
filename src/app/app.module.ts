import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './appComponent/app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CharacterListFilterPipe } from './character-list/character-list-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ForceComponent } from './force/force.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterListFilterPipe,
    ForceComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
