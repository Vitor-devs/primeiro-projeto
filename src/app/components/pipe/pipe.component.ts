import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  txt = "testando o pipe"
  nome = "Oi Meu NOME É meruem"
  numero: number = 0

  hoje = new Date()

  
  dobrar() {
    console.log(this.numero);
    this.numero = this.numero * 2;
    console.log(this.numero);
  }
 
}
