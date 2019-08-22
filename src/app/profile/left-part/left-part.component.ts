import { Component, OnInit } from '@angular/core';
import { ProfileStoreService } from '../profile-store.service';

@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['../profile.component.css']
})
export class LeftPartComponent implements OnInit {
  get enfotech(){return this.profilestore.enfotech;}
  get military(){return this.profilestore.military;}
  get liteon(){return this.profilestore.liteon;}
  get ra(){return this.profilestore.ra;}
  get manzai(){return this.profilestore.manzai;}

  constructor(private profilestore:ProfileStoreService) { }

  ngOnInit() {
  }

}
