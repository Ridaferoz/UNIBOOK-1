import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThomePage } from '../thome/thome';
import { TmsgPage } from '../tmsg/tmsg';

/**
 * Generated class for the TfriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tfriend',
  templateUrl: 'tfriend.html',
})
export class TfriendPage {

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
    console.log('ionViewDidLoad TfriendPage');
  }

}
