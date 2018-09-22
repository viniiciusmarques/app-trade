import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the ModalDetailProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-detail-product',
  templateUrl: 'modal-detail-product.html',
})
export class ModalDetailProductPage {

  public product: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private productProvider: ProductProvider,
    private toastCtrl: ToastController
  ) {
    this.product = this.navParams.get('product');
  }

  openChat(product) {
    this.navCtrl.push('StartChatPage', {
      user: {
        id: product.tb_user.id,
        username: product.tb_user.userName
      }
    });
  }

  likeProduct(event) {
    if (event.target.children[0].getAttribute('ng-reflect-name') === 'heart-outline') {
      this.productProvider.likeProduct(event.target.children[0].id).subscribe(result => {
        event.target.children[0].classList.add('ion-md-heart');
        event.target.children[0].classList.remove('ion-md-heart-outline');
        event.target.children[0].setAttribute('ng-reflect-name', 'heart');
        this.toastCtrl.create({
          message: 'Adicionado aos favoritos!',
          duration: 3000,
          position: 'bottom'
        }).present();
      }, err => console.log(err));
    } else {
      this.productProvider.deslikeProduct(event.target.children[0].id).subscribe(result => {
        event.target.children[0].classList.add('ion-md-heart-outline');
        event.target.children[0].classList.remove('ion-md-heart');
        event.target.children[0].setAttribute('ng-reflect-name', 'heart-outline');
        this.toastCtrl.create({
          message: 'Removido dos favoritos!',
          duration: 3000,
          position: 'bottom'
        }).present();
      }, err => console.log(err));
    }
  }

  myProducts(){
    this.navCtrl.push('MyProductsPage', { product: this.product }, { animate: true, duration: 600, direction: 'forward' });
  }
}
