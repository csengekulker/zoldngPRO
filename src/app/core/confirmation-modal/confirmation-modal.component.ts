import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  providers: []
})

@Injectable()
export class ConfirmationModalComponent implements OnInit {

  @Input() headerTitle!:string
  @Input() refId!:string
  @Input() targetId!:string
  @Input() modalBody!:any
  @Input() primaryBtn!:string
  @Input() secondaryBtn!:string

  @Output() primaryEvent = new EventEmitter<any>()

  // solve with EventEmitter
  emitEvent() {
    console.log("emitEvent mukodik");
    this.primaryEvent.emit()
    
  }


  ngOnInit() {}

}