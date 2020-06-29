import { Component, OnInit } from '@angular/core';
import { Profile } from './../json/MyData.json';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  Awards = Profile.Awards;
  Certifications = Profile.Certifications;
  isNotProd = false;

  constructor() {
    this.isNotProd = !environment.production;
    if (this.isNotProd) {
      console.log(this.Awards);
      console.log(this.Certifications);
    }
  }

  ngOnInit(): void {
    if (this.isNotProd) {
      console.log(this.Awards);
      console.log(this.Certifications);
    }
  }

}
