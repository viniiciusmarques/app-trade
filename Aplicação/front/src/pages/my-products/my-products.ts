import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the MyProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-products',
  templateUrl: 'my-products.html',
})
export class MyProductsPage {
  private product = this.navParams.get('product');
  private offer = this.navParams.get('offer');
  private user = JSON.parse(localStorage.getItem('user')).id;
  public products;
  public selectedProducts: Array<any> = new Array();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private productProvider: ProductProvider,
    private alertCtrl: AlertController
  ) {
    console.log(this.offer);
    if ((this.offer)) {
      if ((this.offer.start) && (this.offer.start.id_firstUser === this.user)) {
        this.findMyProducts();
      } else {
        this.otherProducts();
      }
    } else {
      this.findMyProducts();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProductsPage');
  }

  private findMyProducts() {
    this.productProvider.listMyProducts().subscribe(result => {
      this.products = result.data;
    });
  }

  selectProduct(event) {
    if (event.currentTarget.classList.contains('selected')) {
      event.currentTarget.classList.remove('selected');
      const index = this.selectedProducts.indexOf(event.currentTarget.id);
      this.selectedProducts.splice(index, 1);
    } else {
      event.currentTarget.classList.add('selected');
      this.selectedProducts.push(parseInt(event.currentTarget.id));
    }
  }

  sendOffer() {
    let data = {
      'id_fistUser': JSON.parse(localStorage.getItem('user')).id,
      'id_lastUser': this.product ? this.product.id_user : this.offer.id_firstUser,
      'id_offerStart': this.offer ? this.offer.start ? this.offer.start.id : this.offer.id : 0,
      'status': 'AGUARDANDO',
      'products': []
    }
    if (this.product) {
      data.products.push({
        'id_product': this.product.id
      });
    }
    this.selectedProducts.forEach(element => {
      data.products.push({
        'id_product': element
      });
    });

    this.productProvider.sendOffer(data).subscribe(result => {
      this.alertCtrl.create({
        title: 'Oferta Realizada',
        message: 'Sua oferta foi enviada, porfavor aguarde a resposta do outro usuario.',
        buttons: [
          {
            text: 'Ok',
            role: 'ok',
            handler: () => {
              this.navCtrl.popToRoot();
            }
          }
        ]
      }).present();
    }, err => console.log(err));
  }

  private otherProducts() {
    this.productProvider.listOtherProducts(this.offer.id_firstUser).subscribe(result => {
      this.products = result.data;
    });
  }
}
