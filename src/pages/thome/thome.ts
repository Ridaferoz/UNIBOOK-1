import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagerequestPage } from '../messagerequest/messagerequest';
import { FriendrequestPage } from '../friendrequest/friendrequest';
import { TmsgPage } from '../tmsg/tmsg';
import { TfriendPage } from '../tfriend/tfriend';


/**
 * Generated class for the ThomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thome',
  templateUrl: 'thome.html',
})
export class ThomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val'));
  }
  load(){
    this.navCtrl.push( TmsgPage,{
      val: 'hello'
    })
}
load2(){
  this.navCtrl.push( TfriendPage,{
    val: 'hello'
  })
}
load3(){
this.navCtrl.push( ThomePage,{
  val: 'hello'
})
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThomePage');
  }

}
