import { Injectable } from '@angular/core';
import { Character } from '../model/Character';

@Injectable()
export class CharacterService {
    private characters: Character[];

    getCharacters(): Character[] {
        return this.characters;
    }
}
