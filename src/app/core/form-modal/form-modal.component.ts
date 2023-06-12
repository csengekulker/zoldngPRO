import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormField } from 'src/app/models'

@Component({
  selector: 'form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
  providers: []
})

@Injectable()
export class FormModalComponent implements OnInit {

  @Input() headerTitle!:string
  @Input() refId!:string

  // TODO: replace modalBody with formFields
  @Input() formGroup!:FormGroup
  @Input() formFields!:FormField[]

  @Input() primaryBtn!:string
  @Input() secondaryBtn!:string

  @Output() formSubmit = new EventEmitter<any>()

  // solve with EventEmitter
  emitEvent() {
    console.log("emitEvent mukodik");
    this.formSubmit.emit()
    
  }

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    let form = this.builder.group({
      id: [''],
      fullName: [''],
      dob: [''],
      email: [''],
      phone: [''],
      fullAddress: ['']
    });
  }

}