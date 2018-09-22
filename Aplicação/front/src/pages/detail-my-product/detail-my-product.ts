import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the DetailMyProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-my-product',
  templateUrl: 'detail-my-product.html',
})
export class DetailMyProductPage {

  public product: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private productProvider: ProductProvider,
    private toastCtrl: ToastController
  ) {
    this.product = this.navParams.get('product');
    console.log(this.product);
  }

  delete(id) {
    this.productProvider.deleteProduct(id).subscribe(res => {
      console.log(res);
    }, err => console.log(err));
  }

  editProduct(product) {
    this.navCtrl.push('EditProductPage', {product:product});
  }
}
