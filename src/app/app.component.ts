import { environment } from './../environments/environment';
import { Component, Output, OnInit } from '@angular/core';
import MyData from './json/MyData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyResume';
  isNotProd = false;
  MyResumeData = MyData;
  Profile = MyData.Profile;

  constructor() {
    this.MyResumeData = MyData;
    this.isNotProd = !environment.production;
    if (this.isNotProd) {
      console.log(this.MyResumeData);
    }
  }
  ngOnInit(): void {
    this.MyResumeData = MyData;
  }

}
