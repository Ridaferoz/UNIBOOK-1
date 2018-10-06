import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { StdhomePage } from '../stdhome/stdhome';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase, AngularFireList,AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';


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
  name :string = "";
  lastName:string="";
  mobile :string = "";
  email:string="";
  gaming :string = "";
  
  students:AngularFireList<any>
  constructor(public navCtrl: NavController, public navParams: NavParams,public atrCtrl: AlertController, afDatabase: AngularFireDatabase) {

    this.students = afDatabase.list('/students');
  }
  addStudent(){
    const studentRef = this.students.push({});
    studentRef.set({
      id:studentRef.key,
      name: this.name,
      email:this.email,
      mobile:this.mobile,
      country:this.gaming

    });
    this.load2();
  }
  load2(){
    this.navCtrl.push( StdhomePage,{
      val: 'hello'
    })
  }
  
  }



  

  
  
  
