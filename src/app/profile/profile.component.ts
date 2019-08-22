import { Component, OnInit } from '@angular/core';
import { ProfileStoreService } from './profile-store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get profileChoose(){return this.profilestore.profileChoose;}
  
  constructor(private profilestore:ProfileStoreService) { }

  ngOnInit() {
  }

  choose(choose:string){
    this.profilestore.profileChoose=choose;
  }
}
