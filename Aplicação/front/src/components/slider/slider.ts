import { Component, Input, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the SliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderComponent {
  @Input() images;
  @ViewChild(Slides) slides: Slides;

  constructor() {
  }

}
