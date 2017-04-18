import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { IngredientResult } from '../ingredient-result.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export const SS_API_URL = 'http://supseasonal.herokuapp.com/api/months/';

@Injectable()
export class IngredientSearchService {
  currentSelectedMonth: any;
  ingredients: Array<IngredientResult>;

  constructor (private http: Http) { }

  setMonth(queryMonth) {
    this.currentSelectedMonth = queryMonth;
  }

  getMonth() {
    return this.currentSelectedMonth;
  }

  setIngredients(results) {
    this.ingredients = results;
  }

  getIngredients() {
    return this.ingredients;
  }

  search(queryMonth: string): Promise<IngredientResult[]> {
    const queryURL = `http://supseasonal.herokuapp.com/api/months/${queryMonth}`;

    return this.http.get(queryURL)
    .toPromise()
    .then(res => {
      console.log(res.json());
      const ingredients = res.json().map(item => { if (item.food_name!=='') { return item.food_name } });
      const ingredientResults = res.json().map((item) => {
        return new IngredientResult({
          food_name: item.food_name
        });
      });
      console.log(ingredients);
      console.log(ingredientResults);
      this.setIngredients(ingredientResults);
      return ingredientResults;
    });
    // .map((response: Response) => {
    //   return (<any>response.json()).items.map(item => {
    //       // console.log("raw item", item); // uncomment if you want to debug
    //       return new IngredientResult({
    //         id: item.id,
    //         ingredient: item.food_name,
    //       });
    //     });
    // });
  }
}
