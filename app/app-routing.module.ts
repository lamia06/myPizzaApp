import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPizzaComponent } from './pizzas/detailsPizza/detailsPizza.component';
import { ListPizzaComponent } from './pizzas/list-pizza/list-pizza.component';

const routes: Routes = [
  {path:'pizzas',component: ListPizzaComponent},
  {path:'pizzas/:id',component:DetailsPizzaComponent},
  {path:'',redirectTo:'pizzas',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
