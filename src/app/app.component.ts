import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-projeto';

  //Dado a ser compartilhado
  Usuario: string = "Joaquim";

  UsuarioDados = {
    email: "joaquimSilva@gmail.com",
    role: "adm"
  }
}
