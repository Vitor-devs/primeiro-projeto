import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListasComponent } from './components/listas/listas.component';
import { TestComponent } from './components/test/test.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

//definindo rotas
const routes : Routes = [
    //sem nada é a home 
    //path: aonde (nome)
    //component: qual (componente)
    {path: '', component: FirstComponentComponent},
    {path:'listas', component: ListasComponent},
    {path:'listas/:id', component:ItemDetailComponent},
    {path:'testando', component: TestComponent},
]

@NgModule({
    declarations: [],
    imports:[ RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 

export class AppRoutingModule {}

