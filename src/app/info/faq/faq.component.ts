import { Component, OnInit } from '@angular/core';
import faqJson from './faq.json'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit{
  buttonText :string = " Információk"

  faqs = faqJson.faqs

  ngOnInit(): void { }

}
