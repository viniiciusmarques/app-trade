import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menu: MenuController,
    private oneSignal: OneSignal
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      if (platform.is('cordova')) {
        this.oneSignal.startInit('230aa130-4c25-44ac-91d3-438588dd5825', '924884428999');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
        this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
        this.oneSignal.endInit();
        this.oneSignal.getIds().then(res => {
          console.log(res);
          localStorage.setItem('oneSignal', JSON.stringify(res.userId));
        });
      }
      splashScreen.hide();

      let value = localStorage.getItem('user');

      if (value) {
        this.rootPage = 'HomePage';
        menu.enable(true);
      } else {
        menu.enable(false);
        this.rootPage = 'LoginPage';
      }
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.menu.close();
    this.menu.enable(false);
    this.nav.setRoot('LoginPage');
  }


  private onPushReceived(payload: OSNotificationPayload) {
    alert('Push recevied:' + payload.body);
  }

  private onPushOpened(payload: OSNotificationPayload) {
    alert('Push opened: ' + payload.body);
  }
}

