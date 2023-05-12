import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  nome: string = 'Vitor';

  idade: number = 18;

  job: string = 'Estágio em auditoria';

  hobbies: string[] = ['Estudar', 'Brincar', 'Cantar'];

  sobre: { namorada: string; saldoAtual: number } = {
    namorada: 'Ana',
    saldoAtual: 15.99,
  };
}
