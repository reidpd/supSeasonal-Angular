import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IngredientResult } from '../ingredient-result.model';
import 'rxjs/add/operator/map';

export const SS_API_URL = 'http://supseasonal.herokuapp.com/api/months/';

@Injectable()
export class IngredientSearchService {
  currentSelectedMonth: any;

  constructor (private http: Http,
  @Inject(SS_API_URL) private apiUrl: string) { }

  setMonth(queryMonth) {
    this.currentSelectedMonth = queryMonth;
  }

  getMonth() {
    return this.currentSelectedMonth;
  }

  search(queryMonth: string): Observable<IngredientResult[]> {
    const queryURL = `${this.apiUrl}${queryMonth}`;

    return this.http.get(queryURL)
    .map((response: Response) => {
      return (<any>response.json()).items.map(item => {
          // console.log("raw item", item); // uncomment if you want to debug
          return new IngredientResult({
            id: item.id,
            ingredient: item.food_name,
          });
        });
    });
  }
}
