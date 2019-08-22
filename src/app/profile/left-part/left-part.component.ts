import { Component, OnInit } from '@angular/core';
import { ProfileStoreService } from '../profile-store.service';

@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['../profile.component.css']
})
export class LeftPartComponent implements OnInit {
  get enfotech(){return this.profilestore.experience.enfotech;}
  get military(){return this.profilestore.experience.military;}
  get liteon(){return this.profilestore.experience.liteon;}
  get ra(){return this.profilestore.experience.ra;}
  get manzai(){return this.profilestore.experience.manzai;}

  constructor(private profilestore:ProfileStoreService) { }

  ngOnInit() {
  }

  detailShow(detail:string){
    if(detail=='enfotech'){
      this.profilestore.experience.enfotech.detail=true;
    }
    if(detail=='military'){
      this.profilestore.experience.military.detail=true;
    }
    if(detail=='liteon'){
      this.profilestore.experience.liteon.detail=true;
    }
    if(detail=='ra'){
      this.profilestore.experience.ra.detail=true;
    }
    if(detail=='manzai'){
      this.profilestore.experience.manzai.detail=true;
    }
    console.log('haha')
  }

  detailClose(detailShow:string){
    if(detailShow=='enfotech'){
      this.profilestore.experience.enfotech.detail=false;
    }
    if(detailShow=='military'){
      this.profilestore.experience.military.detail=false;
    }
    if(detailShow=='liteon'){
      this.profilestore.experience.liteon.detail=false;
    }
    if(detailShow=='ra'){
      this.profilestore.experience.ra.detail=false;
    }
    if(detailShow=='manzai'){
      this.profilestore.experience.manzai.detail=false;
    }
  }
}
