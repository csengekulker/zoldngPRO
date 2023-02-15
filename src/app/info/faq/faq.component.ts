import { Component, OnInit } from '@angular/core';
import faqJson from './faq.json'

const tabs = document.querySelectorAll('a')

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit{

  faqs = faqJson.faqs

  triggerTabList !: any
  tabContentList !: any

  onClick(event:any) {
    let id = event.target.id
    console.log(event.target.id);

    this.tabContentList = [].slice.call(document.querySelectorAll('#nav-tabContent div'))
    this.tabContentList.forEach((tab:any, id:any) => {
      console.log(tab.ariaLabel);
      
    })

    this.triggerTabList = [].slice.call(document.querySelectorAll('#list-tab a'))
    this.triggerTabList.forEach((tab:any) => {
      // console.log(tab);
      
    })
    
  }

  



  ngOnInit(): void {


    

  }

}
