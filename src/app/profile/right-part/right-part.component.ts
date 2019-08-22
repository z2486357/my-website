import { Component, OnInit } from '@angular/core';
import { ProfileStoreService } from '../profile-store.service';

@Component({
  selector: 'app-right-part',
  templateUrl: './right-part.component.html',
  styleUrls: ['../profile.component.css']
})
export class RightPartComponent implements OnInit {
  get ta(){return this.profilestore.ta;}
  get ms(){return this.profilestore.ms;}
  get bs(){return this.profilestore.bs;}

  constructor(private profilestore:ProfileStoreService) { }

  ngOnInit() {
  }

}
