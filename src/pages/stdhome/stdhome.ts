import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import{MessagerequestPage} from'../messagerequest/messagerequest';
import { FriendrequestPage } from '../friendrequest/friendrequest';
import { UploadPage } from '../upload/upload';
import { FindpeoplePage } from '../findpeople/findpeople';
import {NotificationPage} from '../notification/notification';
import { SchedulePage } from '../schedule/schedule';
/**
 * Generated class for the StdhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stdhome',
  templateUrl: 'stdhome.html',
})
export class StdhomePage {

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
load4(){
  this.navCtrl.push( UploadPage,{
    val: 'hello'
  })
}
  load5(){
    this.navCtrl.push(FindpeoplePage ,{
      val: 'hello'
    })
}
load6(){
  this.navCtrl.push(NotificationPage ,{
    val: 'hello'
  })
}
load7(){
  this.navCtrl.push( SchedulePage,{
    val: 'hello'
  })
}

}
