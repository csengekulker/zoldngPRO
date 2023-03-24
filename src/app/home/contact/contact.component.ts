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
    const modal = document.querySelector('.modal-body') 

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