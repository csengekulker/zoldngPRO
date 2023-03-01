import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators as V } from '@angular/forms';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm !: FormGroup
  collectMessageDetails():Message {
    const target = this.contactForm.value

    let name:string = target.name!
    let email:string = target.email!
    let subject:string = target.subject!
    let message:string = target.message

    let data = {
      name: name, 
      email: email,
      subject: subject,
      message: message
    }    

    return data

   }

  onSubmit() {
    let messageData = this.collectMessageDetails()

    console.log(messageData);
    

    this.api.sendMessageDetails(messageData).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.log(err)
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

interface Message {
  name: string,
  email: string, 
  subject: string,
  message: string
}