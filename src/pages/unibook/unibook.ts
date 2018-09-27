import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { StdhomePage } from '../stdhome/stdhome';



/**
 * Generated class for the UnibookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unibook',
  templateUrl: 'unibook.html',
})
export class UnibookPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public atrCtrl: AlertController) {

    console.log(navParams.get('val'));
  }
 
  load2(){
    this.navCtrl.push( StdhomePage,{
      val: 'hello'
    })
  }
  
  }



  //showPrompt() {
  //  const prompt = this.atrCtrl.create({
   //   title: 'VERIFICATION',
    //  message: "ENTER 6 DIGITS",
     // inputs: [
       // {
         // name: 'title',
         // placeholder: '******'
       // },
     // ],
     // buttons: [
      //  {
        //  text: 'Cancel',
        //  handler: data => {
         //   console.log('Cancel clicked');
         // }
       // },
       // {
         // text: 'OK',
         // handler: data => {
         //   console.log('Saved clicked');
         // }
       // }
     // ]
    //});
   // prompt.present();
 // }

  
  
  
