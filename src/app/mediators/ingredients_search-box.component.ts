import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';

// By importing just the rxjs operators we need, We're theoretically able
// to reduce our build size vs. importing all of them.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

import { IngredientResult } from '../ingredient-result.model';
import { IngredientSearchService } from '../services/ingredientSearch';

@Component({
  selector: 'ingredients-search-box',
  template: `<input type="text" class="form-control" placeholder="Search" autofocus>`
})

export class IngredientSearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<IngredientResult[]> = new EventEmitter<IngredientResult[]>();

  constructor(private search: IngredientSearchService,
              private el: ElementRef) {}

  ngOnInit(): void {
    // // convert the `keyup` event into an observable stream
    // Observable.fromEvent(this.el.nativeElement, 'submit')
    //   .map((e: any) => e.target.value) // extract the value of the input
    //   .filter((text: string) => text.length > 1) // filter out if empty
    //   .debounceTime(250)                         // only once every 250ms
    //   .do(() => this.loading.emit(true))         // enable loading
    //   // search, discarding old events if new input comes in
    //   .map((query: string) => this.youtube.search(query))
    //   .switch()
    //   // act on the return of the search
    //   .subscribe(
    //     (results: SearchResult[]) => { // on sucesss
    //       this.loading.emit(false);
    //       this.results.emit(results);
    //     },
    //     (err: any) => { // on error
    //       console.log(err);
    //       this.loading.emit(false);
    //     },
    //     () => { // on completion
    //       this.loading.emit(false);
    //     }
    //   );
  }
}
