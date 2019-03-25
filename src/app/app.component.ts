import { Component, OnInit } from '@angular/core';

import {CategoryService} from './services/category.service'
import {Category} from './models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-firebase';

  categories: Category[];
  
  constructor(private categoryService: CategoryService){}

  ngOnInit(){
  	this.categoryService.getCategories().subscribe(data => {
      this.categories = data.map(e => {
        console.log(e.payload.doc.id, e.payload.doc.data());
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Category;
      })
    });
  }
}
