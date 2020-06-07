import { Component, OnInit } from '@angular/core';
import { Profile } from './../json/MyData.json';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  About = Profile.About;
  isNotProd = false;

  constructor() {
    this.isNotProd = !environment.production;
    if (this.isNotProd) {
      console.log(this.About);
    }
  }

  ngOnInit(): void {
    if (this.isNotProd) {
      console.log(this.About);
    }
  }

}
