import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { UserProvider } from '../providers/user/user';
import { ProductProvider } from '../providers/product/product';
import { HttpClientModule } from '@angular/common/http';
import { FileTransfer } from '@ionic-native/file-transfer';
import { ConfigsApi } from '../providers/ConfigsApi';
import { ViaCepProvider } from '../providers/via-cep/via-cep';
import { Facebook } from '@ionic-native/facebook';
import { ChatProvider } from '../providers/chat/chat';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { OneSignal } from '@ionic-native/onesignal';

//const config: SocketIoConfig = { url: 'http://localhost:8080/', options: {} };
const config: SocketIoConfig = { url: 'http://localhost:8080/', options: {} };

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false
    }),
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Camera,
    FileTransfer,
    Facebook,
    StatusBar,
    OneSignal,
    SplashScreen,
    UserProvider,
    ConfigsApi,
    ChatProvider,
    ProductProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ViaCepProvider,
    ChatProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
