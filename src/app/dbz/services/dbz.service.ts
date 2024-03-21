import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root' // Para evitar referenciar el servicio en los providers del app.module
})
export class DbzService {
  public characters: ICharacter[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
    { id: uuid(), name: 'Gohan', power: 7500 }
  ];

  addCharacter(character : ICharacter): void {
    // const newCharacter: ICharacter = { id: uuid(), name, power }
    const newCharacter: ICharacter = { id: uuid(), ...character }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1); // posicion, cantidad a eliminar
  // }
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
