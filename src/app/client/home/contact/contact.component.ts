import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as V } from '@angular/forms';
import { ApiService } from '../../../shared/api';
import { 
  Message,
  SuccessResponse as Res, 
  ErrorResponse as Err } from 'src/app/models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export default class ContactComponent implements OnInit {

  contactForm !: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
  ) {}

  collectMessageDetails():Message {
    const target = this.contactForm.value

    let name:string = target.name!
    let email:string = target.email!
    let subject:string = target.subject!
    let message:string = target.message

    let data:Message = {
      email: email,
      name: name,
      subject: subject,
      body: message
    }    

    return data

   }

  onSubmit() {
    let messageData:Message = this.collectMessageDetails()   
    const modal = document.querySelector('.modal-body') 

    this.api.sendMessageDetails(messageData).subscribe({
      next: (data: Res) => {

        if (data.success) {

          if (modal !=null) {
            modal.innerHTML = "OK"
          }
          
          this.contactForm.reset()
        }
      },
      error: (err: any) => { // property error: Err.error
        if (modal !=null) {
          let e: keyof typeof err.error.message
          for (e in err.error.message) {
            let v = err.error.message[e]
            console.log(v[0]);
            modal.innerHTML += (v[0] + '<br>')

            
          }
          // console.log(err.error.message)
          // err.error.message
        }
      }
    })
    
  }



  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      name: ['', V.required],
      email: ['', [V.required, V.email]],
      subject: ['', V.required],
      message: ['', V.required]
    })
  }

}