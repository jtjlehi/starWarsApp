import { Pipe, PipeTransform } from "@angular/core";
import { Character } from "../model/Character";
import { characterListObj } from "./character-list.obj";

@Pipe({
    name: 'characterFilter'
})
export class CharacterListFilterPipe implements PipeTransform {
    transform(characters: Character[], filterBy: string): Character[] {
        //check if filter by is defined
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? characters.filter((character: Character) => {
            // tslint:disable-next-line:no-unused-expression
            return character.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : characters;
    }
}
