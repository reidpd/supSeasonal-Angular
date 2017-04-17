import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: /* insert API results here */
  // extendedIngredients: recipes[i].extendedIngredients

  constructor() { }

  ngOnInit() {
  }

}
