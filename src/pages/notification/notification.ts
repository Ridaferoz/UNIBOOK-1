import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagerequestPage } from '../messagerequest/messagerequest';
import { FriendrequestPage } from '../friendrequest/friendrequest';
import { StdhomePage } from '../stdhome/stdhome';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  

    load(){
      this.navCtrl.push( MessagerequestPage,{
        val: 'hello'
      })
  }
  load2(){
    this.navCtrl.push( FriendrequestPage,{
      val: 'hello'
    })
  }
  load3(){
  this.navCtrl.push( StdhomePage,{
    val: 'hello'
  })
  }
  noti(){
    this.navCtrl.push( NotificationPage,{
      val: 'hello'
    })
    }
  

}
