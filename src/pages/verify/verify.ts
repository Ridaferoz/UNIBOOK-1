import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {
  verificationId : any ;
  code:string="";
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  send(){

    alert("clicked");
    // (<any>window).FirebasePlugin.verifyPhoneNumber("+923145461567",60,(credential)=>{
    //   alert("sms successfully");
    //   console.log(credential);
    //   this.verificationId= credential.verificationId;}
    //   , (error)=>{
    //     console.error(error);
      
    // });
    (<any>window).FirebasePlugin.verifyPhoneNumber("+923145461567",60, function(credential) {
      console.log(credential);
  
      // ask user to input verificationCode:
      //var code = inputField.value.toString();
  
      var verificationId = credential.verificationId;
      console.log(verificationId);
      
      // var signInCredential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
      // firebase.auth().signInWithCredential(signInCredential);
  }, function(error) {
      console.error(error);
  });

    console.log("test");

  }

  verify(){
    let siginCredential= firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);
    firebase.auth().signInWithCredential(siginCredential).then((info)=>{

    },(error)=>{

    })
  }
}


  