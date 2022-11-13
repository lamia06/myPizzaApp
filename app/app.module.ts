import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsPizzaComponent } from './pizzas/detailsPizza/detailsPizza.component';
import { ListPizzaComponent } from './pizzas/list-pizza/list-pizza.component';
import { BorderCardDirective } from './shared/directives/borderCard.directive';
import { PizzaIngredientColorPipe } from './shared/pipe/pizzaIngredientColor.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ListPizzaComponent,
    BorderCardDirective,
    PizzaIngredientColorPipe,
    DetailsPizzaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
