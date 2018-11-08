import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TfriendPage } from '../tfriend/tfriend';
import { ThomePage } from '../thome/thome';

/**
 * Generated class for the TmsgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tmsg',
  templateUrl: 'tmsg.html',
})
export class TmsgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val'));
  }
  load(){
    this.navCtrl.push(TfriendPage,{
      val: 'hello'
    })
  }
  load2(){
    this.navCtrl.push( ThomePage,{
      val: 'hello'
    })
  }
  load3(){
    this.navCtrl.push( TmsgPage,{
      val: 'hello'
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmsgPage');
  }

}
