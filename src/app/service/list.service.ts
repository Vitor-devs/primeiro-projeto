import { Injectable } from '@angular/core';
//Importando a interface aqui
import { Animal } from '../Animal';

//importando http
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  private url = `http://localhost:3000/animals`

  constructor(private http : HttpClient) { }
  
  //Método para retirar os animais
  //Vai receber toda a lista de animais e um animal especifico que vai ser descoberto na hora do clique
  remover(id: number){
    return this.http.delete<Animal>(`${this.url}/${id}`)
  }
  
  getAll(): Observable <Animal[]> {
    return this.http.get<Animal[]>(this.url)
  }

  getItem(id: number): Observable <Animal> {
    return this.http.get<Animal>(`http://localhost:3000/animals/${id}`)
  }
}
