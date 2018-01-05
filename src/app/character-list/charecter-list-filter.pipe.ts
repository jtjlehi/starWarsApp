import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";

export class CharacterListFilterPipe implements PipeTransform {
    transform(characters: Character[], filter) {
        throw new Error("Method not implemented.");
    }
}
