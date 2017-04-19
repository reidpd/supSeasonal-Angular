//Angular-specific modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Components
import { AppComponent } from './app.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { MonthSelectComponent } from './month-select/month-select.component';
//CSS-Framework-Related
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IngredientsItemComponent } from './ingredients-item/ingredients-item.component';
//Providers
import { IngredientSearchService } from './services/ingredientSearch';
import { Injectables } from './services/ingredientsSearch.injectables';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsListComponent,
    RecipesListComponent,
    MonthSelectComponent,
    IngredientsItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [Injectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
