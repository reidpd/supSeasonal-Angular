import { Routes, RouterModule } from '@angular/router';

import { MonthSelectComponent } from './month-select/month-select.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'month-select', component: MonthSelectComponent },
    { path: 'ingredients', component: IngredientsListComponent },
    { path: 'recipes', component: RecipesListComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'month-select' }
];

export const routing = RouterModule.forRoot(appRoutes);
