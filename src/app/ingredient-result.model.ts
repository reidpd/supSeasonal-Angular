/**
 * SearchResult is a data-structure that holds an individual
 * record from a YouTube video search
 */
export class IngredientResult {
  food_name: string;

  constructor(obj?: any) {
    this.food_name = obj && obj.food_name || null;
  }
}
