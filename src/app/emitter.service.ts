import { EventEmitter, Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  event = new EventEmitter()
 
  constructor() { }
 
  onButtonClick() {
    this.event.emit();
  }
}