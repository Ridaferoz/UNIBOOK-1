import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileChooser } from '@ionic-native/file-chooser';
// import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RolePage } from '../pages/role/role';
import { StdhomePage } from '../pages/stdhome/stdhome';
import { MessagerequestPage } from '../pages/messagerequest/messagerequest';
import { UnibookPage } from '../pages/unibook/unibook';
import { FriendrequestPage } from '../pages/friendrequest/friendrequest';
import { ThomePage } from '../pages/thome/thome';
import { TunibookPage } from '../pages/tunibook/tunibook';
import { AdunibookPage } from '../pages/adunibook/adunibook';
import { UploadPage } from '../pages/upload/upload';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TfriendPage } from '../pages/tfriend/tfriend';
import { TfindPage } from '../pages/tfind/tfind';
import { TmsgPage } from '../pages/tmsg/tmsg';
import { VerifyPage } from '../pages/verify/verify';
import { FindpeoplePage } from '../pages/findpeople/findpeople';
import { NotificationPage } from '../pages/notification/notification';
import { SchedulePage } from '../pages/schedule/schedule';
import { WelcomePage } from '../pages/welcome/welcome';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import firebase from 'firebase';
import { AngularFirestoreModule, AngularFirestore, } from 'angularfire2/firestore';



// @angular/fire/ Modules
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireFunctionsModule } from '@angular/fire/functions';



export const firebaseConfig = {


  apiKey: "AIzaSyDHA1XTaskgv9a1YhiHKli6trJhmyYkOTk",
  authDomain: "verify-18394.firebaseapp.com",
  databaseURL: "https://verify-18394.firebaseio.com",
  projectId: "verify-18394",
  storageBucket: "verify-18394.appspot.com",
  messagingSenderId: "362913438877"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RolePage,
    StdhomePage,
    MessagerequestPage,
    UnibookPage,
    FriendrequestPage,
    ThomePage,
    TunibookPage,
    AdunibookPage,
    UploadPage,
    TfriendPage,
    TfindPage,
    TmsgPage,
    FindpeoplePage,
    NotificationPage,
    VerifyPage,
    SchedulePage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RolePage,
    StdhomePage,
    MessagerequestPage,
    UnibookPage,
    FriendrequestPage,
    ThomePage,
    TunibookPage,
    AdunibookPage,
    UploadPage,
    TfriendPage,
    TmsgPage,
    TfindPage,
    FindpeoplePage,
    NotificationPage,
    VerifyPage,
    SchedulePage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    FileChooser,
    File,

    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
