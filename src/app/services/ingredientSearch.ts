import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { IngredientResult } from '../ingredient-result.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export const SS_API_URL = 'http://supseasonal.herokuapp.com/api/months/';

@Injectable()
export class IngredientSearchService {
  currentSelectedMonth: any;
  ingredients: Array<IngredientResult>;

  static instance: IngredientSearchService;

  constructor (private http: Http) { return IngredientSearchService.instance = IngredientSearchService.instance || this; }

  setMonth = (queryMonth) => { this.currentSelectedMonth = queryMonth.month; };

  getMonth() { return this.currentSelectedMonth; }

  setIngredients(results) {
    console.log(this);
    this.ingredients = results;
  }

  getIngredients() { return this.ingredients; }

  search(): Observable<IngredientResult[]> {
    console.log(this.currentSelectedMonth);
    const queryURL = `http://supseasonal.herokuapp.com/api/months/${this.currentSelectedMonth}`;

    return this.http.get(queryURL)
    .map((response: Response) => {

      return (<any>response.json()).map(item => {
        return new IngredientResult({
          food_name: item.food_name
        });
      });
    });
  }
}
