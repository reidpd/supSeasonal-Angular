import { Component, OnInit } from '@angular/core';

import { IngredientSearchService } from '../services/ingredientSearch';
// import { IngredientsListComponent } from '../ingredients-list/ingredients-list.component';
import { IngredientResult } from '../ingredient-result.model';

@Component({
  selector: 'app-month-select',
  providers: [IngredientSearchService],
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.css']
})
export class MonthSelectComponent implements OnInit {
  months: string[];

  constructor(private ingredientsSearch: IngredientSearchService) { }

  ngOnInit() {
    this.months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  }

  onSubmit(queryMonth: any): void {
    this.ingredientsSearch.setMonth({
      month: queryMonth.queryMonth
    });
    // this.ingredientsSearch.setIngredients(
    this.ingredientsSearch.search()
    .subscribe(
      (results: IngredientResult[]) => {
        this.ingredientsSearch.setIngredients(results);
      },
      (err: any) => {
        console.log(err);
      }
    );
    // console.log(this.ingredientsSearch.getMonth().month)
    // IngredientsListComponent.updateList(this.ingredientsSearch.search(this.ingredientsSearch.getMonth().month));
    // this.currentSelectedMonth = this.ingredientsSearch.getMonth().currentSelectedMonth;
    // console.log('you submitted value: ', this.currentSelectedMonth);
  }

}
