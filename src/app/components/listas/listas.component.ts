import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/service/list.service'; //importanto o service

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {
  animais : Animal[] = []

  animalTipo = ''

  MostrarTipo(animal: Animal): void{
    this.animalTipo = `O Tipo do animal é ${animal.tipo}`
  }

  removerAnimal(animal: Animal){
    this.animais = this.animais.filter((a)=> animal.nome !== a.nome)
    this.listService.remover(animal.id).subscribe()
    // console.log(`Removendo vc ${animal.nome}`)
    // this.listService.remover(this.animais, animal)
    //no método vai ser passado sempre a lista de animais e um animal específico através do botão
  }

  // no construtor estou criando um novo listService do tipo ListService
  constructor(private listService : ListService){
    this.getAnimals()
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animais)=>(this.animais = animais))
  }

}
