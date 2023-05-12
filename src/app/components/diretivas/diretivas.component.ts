import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  size = 40;
  font = 'Impact'
  color = 'red'

  classes = ['titulo-grande', 'titulo-pequeno']

  //var = classe no css
  underline = 'underline'
}
