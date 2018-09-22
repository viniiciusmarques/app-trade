import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the MyProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-products-edit',
  templateUrl: 'my-products-edit.html',
})
export class MyProductsEditPage {

  public products;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productProvider: ProductProvider
  ) {
  }

  ionViewWillEnter() {
    this.productProvider.MyProducts().subscribe(response => {
      this.products = response.data;
    });
  }

  createProduct() {
    this.navCtrl.push('CreateProductPage');
  }

  openDetail(product) {
    this.navCtrl.push('DetailMyProductPage', { product: product });
  }
}
