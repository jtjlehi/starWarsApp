import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";
import { Character } from "../model/Character";
import { characterListObj } from "./character-list.obj";

export class CharacterListFilterPipe implements PipeTransform {
    transform(characters: Character[], filterBy: string): Character[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? characters.filter((character: Character) => {
            // tslint:disable-next-line:no-unused-expression
            character.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : characters;
    }
}
