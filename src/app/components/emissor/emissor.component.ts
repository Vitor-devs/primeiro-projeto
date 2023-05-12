import { Component } from '@angular/core';

@Component({
  selector: 'app-emissor',
  templateUrl: './emissor.component.html',
  styleUrls: ['./emissor.component.css']
})
export class EmissorComponent {
  num: number = 0


  onChangeNumero(){
    this.num = (Math.floor(Math.random() * 10))
  }
}
