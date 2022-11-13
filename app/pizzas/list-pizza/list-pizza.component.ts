import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { LIST_PIZZAS } from 'src/app/shared/list.pizza';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.css']
})
export class ListPizzaComponent implements OnInit {

  PIZZAS: Pizza[] | undefined;
  constructor(private router: Router) { }

  ngOnInit() : void{
    this.PIZZAS = LIST_PIZZAS;
  }
  selectPizza(selectedPizza: Pizza): void{
   // alert('Vous avez selectionné:'+ selectedPizza.name);
   const link = [ 'pizzas', selectedPizza.id]
    this.router.navigate(link);
  }
}






