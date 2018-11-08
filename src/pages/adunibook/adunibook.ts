import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the AdunibookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adunibook',
  templateUrl: 'adunibook.html',
})
export class AdunibookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    console.log(navParams.get('val'));
  }
 

  
  //ionViewDidLoad() {
   // console.log('ionViewDidLoad AdunibookPage');
 // }

  
}

