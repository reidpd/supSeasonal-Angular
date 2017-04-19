// Angular-specific modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Routing-Specific
// import { routing } from './app.routing';
import { Routes, RouterModule } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { MonthSelectComponent } from './month-select/month-select.component';
// CSS-Framework-Related
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Providers
import { IngredientSearchService } from './services/ingredientSearch';
import { Injectables } from './services/ingredientsSearch.injectables';

const appRoutes: Routes = [
    { path: 'month-select', component: MonthSelectComponent },
    { path: 'ingredients', component: IngredientsListComponent },
    { path: 'recipes', component: RecipesListComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'month-select' }
];

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
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [Injectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
