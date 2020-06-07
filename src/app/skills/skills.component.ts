import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Profile } from './../json/MyData.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  Skills = Profile.Skills;
  isNotProd = false;

  constructor() {
    this.isNotProd = !environment.production;
    if (this.isNotProd) {
      console.log(this.Skills);
    }
  }

  ngOnInit(): void {
    if (this.isNotProd) {
      console.log(this.Skills);
    }
  }

}
