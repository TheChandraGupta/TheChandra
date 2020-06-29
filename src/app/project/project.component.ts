import { Component, OnInit } from '@angular/core';
import { Profile } from './../json/MyData.json';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  Projects = Profile.Projects;
  isNotProd = false;

  constructor() {
    this.isNotProd = !environment.production;
    if (this.isNotProd) {
      console.log(this.Projects);
    }
  }

  ngOnInit(): void {
    if (this.isNotProd) {
      console.log(this.Projects);
    }
  }

}
