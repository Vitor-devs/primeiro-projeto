import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-filho',
  templateUrl: './component-filho.component.html',
  styleUrls: ['./component-filho.component.css']
})
export class ComponentFilhoComponent {
  //recebendo no componente filho
  @Input() name:string = "";
  @Input() UsuarioDados!:{email: string, role: string}
}
