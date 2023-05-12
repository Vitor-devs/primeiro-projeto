import { Component } from '@angular/core';

@Component({
  selector: 'app-emissor-evento',
  templateUrl: './emissor-evento.component.html',
  styleUrls: ['./emissor-evento.component.css']
})
export class EmissorEventoComponent {

  numero : number = 0;

  //recebendo o que foi passado como paramtro no html e executa a logica
  onMudaNumero(){
    this.numero = Math.floor(Math.random() * 10)
    console.log("Emitindo no pai")
  }
}
