import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple a test', 'https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4BqodXSHHE-j78vyZ0iwRUmY_nuzprQ_mxVCWqrJBTJk3A.jpeg'),
    new Recipe('A Tasty HotDog', 'This is a simples test of a recipe', 'https://image.shutterstock.com/image-photo/hot-dog-mustard-ketchup-side-260nw-683413162.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
