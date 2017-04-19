import { IngredientSearchService } from './ingredientSearch';

export const Injectables: Array<any> = [
  { provide: IngredientSearchService, useClass: IngredientSearchService }
]
