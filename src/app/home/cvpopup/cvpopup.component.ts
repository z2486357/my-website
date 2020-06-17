import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cvpopup',
  templateUrl: './cvpopup.component.html',
  styleUrls: ['./cvpopup.component.css']
})
export class CvpopupComponent {
  @Output() close= new EventEmitter<void>();


  download(){
    window.open("https://drive.google.com/file/d/16bWddBMqAEGWoFQPQ23cSlM_WDDw8yq1/view");
  }
  onClose(){
      this.close.emit();
  }
}
