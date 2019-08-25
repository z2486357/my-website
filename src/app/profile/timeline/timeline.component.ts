import { Component, OnInit } from '@angular/core';
import { ProfileStoreService } from '../profile-store.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['../profile.component.css']
})
export class TimelineComponent implements OnInit {
  get enfotech(){return this.profilestore.experience.enfotech;}
  get military(){return this.profilestore.experience.military;}
  get liteon(){return this.profilestore.experience.liteon;}
  get ra(){return this.profilestore.experience.ra;}
  get manzai(){return this.profilestore.experience.manzai;}
  get ta(){return this.profilestore.experience.ta;}
  get ms(){return this.profilestore.experience.ms;}
  get bs(){return this.profilestore.experience.bs;}

  constructor(private profilestore:ProfileStoreService) { }

  ngOnInit() {
  }

}
