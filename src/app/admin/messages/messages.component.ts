import { Component, OnInit } from '@angular/core';
import { SuccessResponse as Res } from 'src/app/models/HttpResponse';
import { Message } from 'src/app/models/Message';
import { MessageApiService } from 'src/app/shared/api/messages/messageApi.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export default class MessagesComponent implements OnInit {

  constructor(private api: MessageApiService) { }

  messages!: Message[]

  sender: any = {}

  expand(id: number|null) {
    var dots = document.getElementById(`dots${id}`); //span
    var more = document.getElementById(`more${id}`); //span id
    var toggle = document.getElementById(`toggle${id}`); //a id

    if (dots && toggle && more) {
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        toggle.innerHTML = "More";
        more.style.display = "none";
      } else {
        dots.style.display = "none";
        toggle.innerHTML = "Less";
        more.style.display = "inline";
      }
    }

  }

  displayMessage(id: number) {
    
    // TODO: display message by id in modal
  }

  fetchMessages() {
    this.api.fetchMessages().subscribe({
      next: (data: Res) => {
        data.data.forEach((msg: Message) => {
          let short = msg.body.slice(0, 100)
          msg.short = short
        });

        this.messages = data.data
      }
    })
  }

  fetchMessageById(id: number) {
    this.api.fetchMessageById(id).subscribe({
      next: (data: any) => {
        this.sender = data.data
        console.log(this.sender);

      },
      error: (e: any) => console.error(e)


    })
  }

  ngOnInit(): void {
    this.fetchMessages()
  }
}
