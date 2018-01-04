import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestComponent1Component } from './test-component1/test-component1.component';
import { CharacterListComponent } from './character-list/character-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponent1Component,
    CharacterListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
