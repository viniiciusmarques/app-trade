import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the ModalFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-filter',
  templateUrl: 'modal-filter.html',
})
export class ModalFilterPage {
  public filter = [null, null, null];
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {}

  filterItems(type, string) {
    let regex = new RegExp('^' + string);
    if (type == 'city') {
      this.filter[0] = regex;
    } else if (type == 'state') {
      this.filter[1] = regex;
    } else {
      this.filter[2] = regex;
    }
  }

}
