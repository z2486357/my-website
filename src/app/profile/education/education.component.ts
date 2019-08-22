import { Component, OnInit } from '@angular/core';
import { ProfileStoreService } from '../profile-store.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['../profile.component.css']
})
export class EducationComponent implements OnInit {

  get ms(){return this.profilestore.experience.ms;}
  get bs(){return this.profilestore.experience.bs;}

  experience:any[]=[];

  constructor(private profilestore:ProfileStoreService) { }

  ngOnInit() {
    this.experience.push(this.ms);
    this.experience.push(this.bs);
  }

}
