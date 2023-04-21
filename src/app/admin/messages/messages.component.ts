import { Component, OnInit } from '@angular/core';
import { MessageApiService } from 'src/app/shared/api/messages/messageApi.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private api: MessageApiService) { }

  messages!:any

  fetchMessages() {
    this.api.fetchMessages().subscribe({
      next: (data:any) => this.messages = data.data
    })
  }

  ngOnInit(): void {
      this.fetchMessages()
  }
}
