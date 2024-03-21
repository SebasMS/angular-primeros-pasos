import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: ICharacter[] = [{ name: 'Trunks', power: 10 }];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  // emitDeleteCharacter(index: number): void {
  //   if (index === undefined || index < 0) return;
  //   this.onDeleteCharacter.emit(index);
  // }
  emitDeleteCharacter(id?: string): void {
    if (!id || id === undefined || id.length === 0) return;
    this.onDeleteCharacter.emit(id);
  }
}
