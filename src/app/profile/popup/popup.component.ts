import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() detailShow:any;
  @Output() close= new EventEmitter<void>();


  onClose(){
      this.close.emit();
  }
}
