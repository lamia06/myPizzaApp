import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/Pizza';
import { LIST_PIZZAS } from 'src/app/shared/list.pizza';


@Component({
  selector: 'app-detailsPizza',
  templateUrl: './detailsPizza.component.html',
  styleUrls: ['./detailsPizza.component.css']
})
export class DetailsPizzaComponent implements OnInit {
  pizzaToDisplay: Pizza | undefined;
  listOfPizzas: Pizza[] | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit():void {
  const retrieveIdFormURL = +this.route.snapshot.params['id'];
  this.listOfPizzas= LIST_PIZZAS;
  this.listOfPizzas?.forEach(pizza => {
    if(pizza.id = retrieveIdFormURL){
      this.pizzaToDisplay=pizza;
    }
  })
console.log(this.pizzaToDisplay);


  }


}
