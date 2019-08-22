import { Component, OnInit } from '@angular/core';
import { ProfileStoreService } from '../profile-store.service';

@Component({
  selector: 'app-right-part',
  templateUrl: './right-part.component.html',
  styleUrls: ['../profile.component.css']
})
export class RightPartComponent implements OnInit {
  get ta(){return this.profilestore.experience.ta;}
  get ms(){return this.profilestore.experience.ms;}
  get bs(){return this.profilestore.experience.bs;}

  constructor(private profilestore:ProfileStoreService) { }

  ngOnInit() {
  }

  detailShow(detail:string){
    if(detail=='ta'){
      this.profilestore.experience.ta.detail=true;
    }
    if(detail=='ms'){
      this.profilestore.experience.ms.detail=true;
    }
    if(detail=='bs'){
      this.profilestore.experience.bs.detail=true;
    }
  }

  detailClose(detailShow:string){
    if(detailShow=='ta'){
      this.profilestore.experience.ta.detail=false;
    }
    if(detailShow=='ms'){
      this.profilestore.experience.ms.detail=false;
    }
    if(detailShow=='bs'){
      this.profilestore.experience.bs.detail=false;
    }
  }
}
