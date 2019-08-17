import { Component, OnInit } from '@angular/core';
import { WorkStoreService } from './work-store.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  
  get displayChoose() {return this.workStore.displayChoose;}

  constructor(private workStore:WorkStoreService) { }

  ngOnInit() {
  }


  displayWork(choose:string){
    this.workStore.displayChoose=choose;
  }
}
