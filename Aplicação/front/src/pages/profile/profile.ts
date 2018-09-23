import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private modalCtrl: ModalController,
    private menu: MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewCanEnter() {
    this.userProvider.user().subscribe(res => {
      this.user = res.data;
      console.log(res);
    }, err => console.log(err));
  }

  alterProfile() {
    this.modalCtrl.create('ModalProfilePage', {user: this.user}).present();
  }

  deactive() {
    this.userProvider.deactive().subscribe(res => {
      localStorage.removeItem('user');
      this.menu.enable(false);
      this.navCtrl.setRoot('LoginPage');
    }, err => console.log(err));
  }

}
