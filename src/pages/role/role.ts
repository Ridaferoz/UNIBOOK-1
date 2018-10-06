import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UnibookPage } from '../unibook/unibook';
import { TunibookPage } from '../tunibook/tunibook';
import { AdunibookPage } from '../adunibook/adunibook';

/**
 * Generated class for the RolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-role',
  templateUrl: 'role.html',
})
export class RolePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  load(){
    this.navCtrl.push( UnibookPage,{
      val: 'hello'
    })
  }
  load2(){
    this.navCtrl.push( TunibookPage,{
      val: 'hello'
    })
  }
  admin(){
    this.navCtrl.push( AdunibookPage,{
      val: 'ad'
    })
  }

    

}
