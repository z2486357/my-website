import { Component, OnInit } from '@angular/core';
import { ProfileStoreService } from '../profile-store.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['../profile.component.css']
})
export class WorkExperienceComponent implements OnInit {
  get ibm(){return this.profilestore.experience.ibm;}
  get free(){return this.profilestore.experience.free;}
  get enfotech(){return this.profilestore.experience.enfotech;}
  get military(){return this.profilestore.experience.military;}
  get liteon(){return this.profilestore.experience.liteon;}
  get ra(){return this.profilestore.experience.ra;}
  get manzai(){return this.profilestore.experience.manzai;}
  get ta(){return this.profilestore.experience.ta;}

  experience:any[]=[];

  constructor(private profilestore:ProfileStoreService) { }

  ngOnInit() {
    this.experience.push(this.ibm);
    this.experience.push(this.free);
    this.experience.push(this.enfotech);
    this.experience.push(this.military);
    this.experience.push(this.liteon);
    this.experience.push(this.ra);
    this.experience.push(this.ta);
    this.experience.push(this.manzai);
  }

}
