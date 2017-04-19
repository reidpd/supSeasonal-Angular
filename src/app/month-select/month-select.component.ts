import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IngredientSearchService } from '../services/ingredientSearch';
import { IngredientResult } from '../ingredient-result.model';

@Component({
  selector: 'app-month-select',
  providers: [IngredientSearchService],
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.css']
})
export class MonthSelectComponent implements OnInit {
  months: string[];
  loading = false;
  // returnUrl: string;

  constructor(private ingredientsSearch: IngredientSearchService) {}

  ngOnInit() {
    this.months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(queryMonth: any): void {
    this.ingredientsSearch.setMonth({
      month: queryMonth.queryMonth
    });
    this.ingredientsSearch.search()
    .subscribe(
      (results: IngredientResult[]) => {
        this.ingredientsSearch.setIngredients(results);
        // this.router.navigate([this.returnUrl]);
      },
      (err: any) => { console.log(err); }
    );
  }

}
