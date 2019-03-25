import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private firestore: AngularFirestore) { }

  getCategories(){
  	return this.firestore.collection('categories').snapshotChanges();
  }

  createNewCategory(cateData){
  	// lay key moi tu firebase
  	// cap nhat du lieu trong cateData voi key moi
  	// luu du lieu len firebse - collection categories
  	// return sau khi luu thanh cong
  }
}
