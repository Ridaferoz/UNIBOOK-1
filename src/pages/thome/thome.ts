import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { MessagerequestPage } from '../messagerequest/messagerequest';
import { FriendrequestPage } from '../friendrequest/friendrequest';
import { TmsgPage } from '../tmsg/tmsg';
import { TfriendPage } from '../tfriend/tfriend';
import {TfindPage} from '../tfind/tfind';


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
  constructor(public navCtrl: NavController, public navParams: NavParams,public atrCtrl: AlertController) {
   

  }
  showCheckboxAlert() {
    let alert = this.atrCtrl.create();
    alert.setTitle('SELECT COURSES');

    alert.addInput({
      type: 'checkbox',
      label: 'AI',
      name: 'input-AI',
      id: 'input-AI',
      value: 'AI',
      checked: true
    });

   alert.addInput({
      type: 'checkbox',
      label: 'OOP',
      name: 'input-OOP',
      id: 'input-OOP',
      value: 'OOP'
    });
   alert.addInput({
      type: 'checkbox',
      label: 'DS',
      name: 'input-DS',
      id: 'input-DS',
      value: 'DS'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }
 
  showPrompt() {
    const prompt = this.atrCtrl.create({
      title: 'Virtual Class',
      message: "Enter Code",
      inputs: [
        {
          name: 'title',
          placeholder: 'Code'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  
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
  load5(){
    this.navCtrl.push(TfindPage ,{
      val: 'hello'
    })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThomePage');
  }

}
