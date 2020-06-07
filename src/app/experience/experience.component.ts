import { Component, OnInit } from '@angular/core';
import { Profile } from './../json/MyData.json';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  Experiences = Profile.Experiences;
  isNotProd = false;

  constructor() {
    this.isNotProd = !environment.production;
    if (this.isNotProd) {
      console.log(this.Experiences);
    }
  }

  ngOnInit(): void {
    if (this.isNotProd) {
      console.log(this.Experiences);
    }
  }

}
