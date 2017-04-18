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
  loading: boolean;

  constructor(private ingredientSearch: IngredientSearchService) { }
  ngOnInit() {}

  updateList(results: IngredientResult[]): void {
    this.ingredients = results;
  }

  getIngredients() {
    return this.ingredientSearch.getIngredients();
  }

}
