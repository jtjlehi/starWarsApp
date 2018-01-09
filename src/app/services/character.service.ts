import { Injectable } from '@angular/core';
import { Character } from '../model/Character';
import { characterListObj } from './character-list.obj';

@Injectable()
export class CharacterService {
    private characters: Character[];

    getCharacters(): Character[] {
        return characterListObj;
    }
    hitServer(): void {
        console.log('hit server does not hit the server');
    }
}
