import { Component, OnInit } from '@angular/core';
import servicesJson from '../../services/services.json'
import { Service } from 'src/app/services/services.component';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
export class PricelistComponent implements OnInit {
  services !: Service[]

  ngOnInit(): void { 

    console.log(servicesJson);
    
  }

}
