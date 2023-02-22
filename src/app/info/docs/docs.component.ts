import { Component, OnInit } from '@angular/core';

let toTop = document.querySelector('#toTop')


@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  buttonText :string = "< Information"


  ngOnInit(): void {


    //   toTop.addEventListener("click", this.backToTop)

    //   window.onscroll = () => {
    //     if (
    //       document.body.scrollTop > 20 ||
    //       document.documentElement.scrollTop > 20
    //       ) {
    //       toTop.style.display = "block";
    //       } else {
    //       toTop.style.display = "none";
    //       }
    //     };
    // 

    //   backToTop() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    //   }

  }
}
