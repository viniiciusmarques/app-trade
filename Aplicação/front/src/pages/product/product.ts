import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  public products;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private product: ProductProvider
  ) {
  }

  ionViewWillEnter() {
    this.findAllProducts();
  }

  findAllProducts() {
    this.product.listProducts().subscribe(response => {
      this.products = response.data;
    }, err => {
      console.log(err);
    });
  }

}
