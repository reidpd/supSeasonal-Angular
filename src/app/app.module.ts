//Angular-specific modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Components
import { AppComponent } from './app.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { MonthSelectComponent } from './month-select/month-select.component';
//CSS-Framework-Related
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsListComponent,
    RecipesListComponent,
    MonthSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
