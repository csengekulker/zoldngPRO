import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/models/Type';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit{

  types!:Type[]

  constructor(private api: ApiService) { }

  ngOnInit():void {
    this.api.fetchTypes().subscribe({
      next: (data:any) => {
        this.types = data.data
      }
    })
  }

}
