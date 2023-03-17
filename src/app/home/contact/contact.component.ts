import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as V } from '@angular/forms';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm !: FormGroup

  collectMessageDetails():any {
    const target = this.contactForm.value

    let name:string = target.name!
    let email:string = target.email!
    let subject:string = target.subject!
    let message:string = target.message

    let data = {
      email: email,
      name: name,
      subject: subject,
      body: message
    }    

    return data

   }

  onSubmit() {
    let messageData = this.collectMessageDetails()   
    let modal = document.querySelector('.modal-body') 

    this.api.sendMessageDetails(messageData).subscribe({
      next: (data: any) => {

        if (data.success) {

          if (modal !=null) {
            modal.innerHTML = "OK"
          }
          
          this.contactForm.reset()
        }
      },
      error: (err: any) => {
        if (modal !=null) {
          modal.innerHTML = err.message
        }
      }
    })
    
  }

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
  ) {}
  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      name: ['', V.required],
      email: ['', [V.required, V.email]],
      subject: ['', V.required],
      message: ['', V.required]
    })
  }

}