import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emitindo',
  templateUrl: './emitindo.component.html',
  styleUrls: ['./emitindo.component.css']
})
export class EmitindoComponent {
  @Output() criarNumero: EventEmitter<any> = new EventEmitter()

  gerarNumero(){
    this.criarNumero.emit()
  }
}
