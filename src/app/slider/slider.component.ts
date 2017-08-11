import { Component, OnInit } from '@angular/core';
import { SliderService } from '../slider.service'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private sliderService: SliderService) { }

  ngOnInit() {
  }

}
