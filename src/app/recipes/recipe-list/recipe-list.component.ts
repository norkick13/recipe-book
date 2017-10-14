import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [];
 @Output() recipeSelected = new EventEmitter<Recipe>();
 recipe = new Recipe ('Dummy', 'Dummy','http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg');
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
