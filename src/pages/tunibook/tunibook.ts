import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThomePage } from '../thome/thome';

/**
 * Generated class for the TunibookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tunibook',
  templateUrl: 'tunibook.html',
})
export class TunibookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val'));
  }
  load2(){
    
    this.navCtrl.push( ThomePage,{
      val: 'hello'
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TunibookPage');
  }

}
