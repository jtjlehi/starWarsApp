import { Component, OnInit } from '@angular/core';
import { characterListObj } from './character-list.obj';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters = characterListObj;
  constructor() { }

  ngOnInit() {
  }

}
