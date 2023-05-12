import { Component, Output, EventEmitter } from '@angular/core';
//importa o output e eventemitter para poder mandar para o pai
@Component({
  selector: 'app-recebedor-evento',
  templateUrl: './recebedor-evento.component.html',
  styleUrls: ['./recebedor-evento.component.css']
})
export class RecebedorEventoComponent {
  //saida() como vai se chamar : tipo<any> = instancia
  @Output() mudaNumero : EventEmitter<any> = new EventEmitter

  //emitindo
  handleClick(){
    this.mudaNumero.emit()
  }
}
