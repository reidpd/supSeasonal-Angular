import { Component, OnInit } from '@angular/core';
import { IngredientResult } from '../ingredient-result.model';
import { IngredientSearchService } from '../services/ingredientSearch';

@Component({
  selector: 'app-ingredients-list',
  providers: [IngredientSearchService],
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {
  ingredients: IngredientResult[];
  // currentSelectedMonth: string = 'idk';
  loading: boolean;

  constructor(private ingredientSearch: IngredientSearchService) { }
  ngOnInit() {}

  updateList(results: IngredientResult[]): void {
    console.log('update called!')
    console.log(results)
    this.ingredients = results;
  }

  getIngredients() {
    console.log(this.ingredientSearch.getMonth());
    return this.ingredientSearch.getIngredients();
  }

  renderNewIngredients() {
    console.log(this)
    console.log(this.ingredientSearch.getIngredients());
    return this.updateList(this.getIngredients());
  }

}
