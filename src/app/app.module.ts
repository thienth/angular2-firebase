import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // config angular firebase modules
    AngularFireModule.initializeApp({
    	apiKey: "AIzaSyCR76R3cFmE0ArB4TKmjHNHsiK-15_OCOY",
	    authDomain: "web207-pt13211-3ad7b.firebaseapp.com",
	    databaseURL: "https://web207-pt13211-3ad7b.firebaseio.com",
	    projectId: "web207-pt13211-3ad7b",
	    storageBucket: "web207-pt13211-3ad7b.appspot.com",
	    messagingSenderId: "278389836912"
    }, 'web207-pt13211'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
