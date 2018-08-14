import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAxekvTk1qym6utnCczwLLemoM9JkbnAgk',
      authDomain: 'ng-recipe-book-bc0b8.firebaseio.com'
  });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
