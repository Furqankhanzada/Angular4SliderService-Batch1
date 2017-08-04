import { Injectable } from '@angular/core';

@Injectable()
export class SliderService {
  translateY: string = 'translateY(0px)';
  slides: any[] = [
    {active: true},
    {active: false},
    {active: true}
  ]
  constructor() { }
  next(){
    this.translateY = 'translateY(-100px)'
  }
}
