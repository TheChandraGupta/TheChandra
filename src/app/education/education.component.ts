import { Component, OnInit } from '@angular/core';
import { Profile } from './../json/MyData.json';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  Educations = Profile.Educations;
  isNotProd = false;

  constructor() {
    this.isNotProd = !environment.production;
    if (this.isNotProd) {
      console.log(this.Educations);
    }
  }

  ngOnInit(): void {
    if (this.isNotProd) {
      console.log(this.Educations);
    }
  }

}
