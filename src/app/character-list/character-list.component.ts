import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters = [
    {name: 'C-3P0'},
    {name: 'Luke Skywalker'},
    {name: 'Han Solo'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
