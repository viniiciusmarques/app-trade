import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  constructor(
    private navCtrl: NavController
  ) {}

  pushPage(page:string) {
    this.navCtrl.push(page, null, { animate: true, duration: 600, direction:'forward' });
  }

}
