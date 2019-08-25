import { Component, OnInit, Input } from '@angular/core';
import { ProfileStoreService } from '../profile-store.service';

@Component({
  selector: 'app-timeline-block',
  templateUrl: './timeline-block.component.html',
  styleUrls: ['../profile.component.css']
})
export class TimelineBlockComponent implements OnInit {
  @Input() inputExperience:any;

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
