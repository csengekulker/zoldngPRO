import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/models';
import { TypeApiService } from 'src/app/shared/api';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit{

  types!:Type[]

  constructor(private api: TypeApiService) { }

  ngOnInit():void {
    this.api.fetchTypes().subscribe({
      next: (data:any) => {
        this.types = data.data
      }
    })
  }

}
