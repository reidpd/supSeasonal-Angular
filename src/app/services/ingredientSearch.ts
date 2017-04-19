import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { IngredientResult } from '../ingredient-result.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export const SS_API_URL = 'http://supseasonal.herokuapp.com/api/months/';

@Injectable()
export class IngredientSearchService {
  currentSelectedMonth: any;
  ingredients: Array<IngredientResult>;

  static instance: IngredientSearchService;

  constructor (private http: Http) {
    return IngredientSearchService.instance = IngredientSearchService.instance || this;
  }

  setMonth(queryMonth) {
    this.currentSelectedMonth = queryMonth.month;
  }

  getMonth() {
    return this.currentSelectedMonth;
  }

  setIngredients(results) {
    console.log(this)
    this.ingredients = results;
  }

  getIngredients() {
    return this.ingredients;
  }

  search(): Observable<IngredientResult[]> {
    console.log(this.currentSelectedMonth);
    const queryURL = `http://supseasonal.herokuapp.com/api/months/${this.currentSelectedMonth}`;

    return this.http.get(queryURL)
    // .toPromise()
    // .then(res => {
    .map((response: Response) => {

      return (<any>response.json()).map(item => {
        return new IngredientResult({
          food_name: item.food_name
        });
      });
    });
      // // console.log(res.json());
      // const ingredients = res.json().map(item => { if (item.food_name!=='') { return item.food_name } });
      // const ingredientResults = res.json().map((item) => {
      //   return new IngredientResult({
      //     food_name: item.food_name
      //   });
      // });
      // console.log(ingredients);
      // console.log(ingredientResults);
      // this.setIngredients(ingredientResults);
      // console.log(this.ingredients);
      // console.log(this.ingredients);
      // return ingredientResults;
    // });
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
