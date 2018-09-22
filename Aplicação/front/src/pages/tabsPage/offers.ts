import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

  products = 'myOffers';
  offersSend;
  offersRecive;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private productProvider: ProductProvider
  ) {
    console.log('chamando ofertas');
  }

  ionViewWillEnter() {
    this.getOffers();
  }

  getOffers() {
    this.productProvider.getOffers().subscribe(result => {
      this.offersSend = result.data[0].offersSend;
      console.log(result.data);
      this.offersRecive = result.data[0].offersRecive;
    }, err => console.log(err));
  }

  viewOffer(offer) {
    this.navCtrl.push('InfoOfferPage', {offer: offer});
  }

}
