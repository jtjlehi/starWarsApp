import { Component, OnInit } from '@angular/core';
import { characterListObj } from './character-list.obj';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters = characterListObj;
  testProp: string;
  filterBy: string;
  constructor(private characterService: CharacterService) {
    this.testProp = 'test prop';
  }

  ngOnInit() {
    console.log('hi there');
    this.logTestProp();
  }
  logTestProp() {
    console.log(this.testProp);
  }
  displayCharInfo() {
    console.log('character info');
  }
  onNotify(message: string) {
    console.log(message);
  }
}
