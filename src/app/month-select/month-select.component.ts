import { Component, OnInit } from '@angular/core';

import { IngredientSearchService } from '../services/ingredientSearch';
import { IngredientsListComponent } from '../ingredients-list/ingredients-list.component';

@Component({
  selector: 'app-month-select',
  providers: [IngredientSearchService],
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.css']
})
export class MonthSelectComponent implements OnInit {
  months: string[];
  currentSelectedMonth: any;

  constructor(private ingredientsSearch: IngredientSearchService) { }

  ngOnInit() {
    this.months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  }

  onSubmit(queryMonth: any): void {
    this.currentSelectedMonth = queryMonth.queryMonth;
    console.log(this.currentSelectedMonth)
    this.ingredientsSearch.setMonth({
      month: this.currentSelectedMonth
    });
    this.ingredientsSearch.search(this.currentSelectedMonth);
    console.log(this.ingredientsSearch.getMonth().month)
    // IngredientsListComponent.updateList(this.ingredientsSearch.search(this.ingredientsSearch.getMonth().month));


    // this.currentSelectedMonth = this.ingredientsSearch.getMonth().currentSelectedMonth;
    // console.log('you submitted value: ', this.currentSelectedMonth);
  }

}
