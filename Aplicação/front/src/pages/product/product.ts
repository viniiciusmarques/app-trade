import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  searchTerm: string;
  public backup;
  public products;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private product: ProductProvider,
    private modalCtrl: ModalController
  ) {
  }

  ionViewWillEnter() {
    this.findAllProducts();
  }

  findAllProducts() {
    this.product.listProducts().subscribe(response => {
      this.products = response.data;
      this.backup = response.data;
      console.log(response.data);
    }, err => {
      console.log(err);
    });
  }

  filterItems() {
    this.products = this.backup;
    this.products = this.products.filter(item => {
      if(this.searchTerm.length > 0) {
        const PATTERN = new RegExp('^' + this.searchTerm.toLowerCase());
        return PATTERN.test(item.name.toLowerCase());
      } else {
        return item;
      }
    });
  }

  filter() {
    const modal = this.modalCtrl.create('ModalFilterPage');

    modal.onDidDismiss(data => {
      this.products = this.backup;
      console.log(data);
      if(data) {
        data.forEach((regex, i) => {
          if (regex != null) {
            if (i == 0) {
              this.products = this.products.filter(item => {
                return regex.test(item.tb_user.address.city.toLowerCase());
              });
            } else if (i == 1) {
              this.products = this.products.filter(item => {
                return regex.test(item.tb_user.address.state.toLowerCase());
              });
            } else {
              console.log(regex);
              this.products = this.products.filter(item => {
                  return regex.test(item.tb_user.userName.toLowerCase());
              });
            }
          }
        });
      }
    });

    modal.present();
  }
}
