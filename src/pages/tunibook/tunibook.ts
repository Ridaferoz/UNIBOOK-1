import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,Button } from 'ionic-angular';
import { ThomePage } from '../thome/thome';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase, AngularFireList,AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

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
  name :string = "";
  lastName:string="";
  mobile :string = "";
  email:string="";
  gaming :string = "";
  
  teachers:AngularFireList<any>

  constructor(public navCtrl: NavController, public navParams: NavParams,public atrCtrl:AlertController, afDatabase:AngularFireDatabase) {

    this.teachers = afDatabase.list('/teachers');
  }
  addTeachers()
  {
    const teachersRef = this.teachers.push({});
    teachersRef.set({
      id:teachersRef.key,
      name: this.name,
      email:this.email,
      mobile:this.mobile,
      country:this.gaming

    });
    this.load2();
  }
  load2(){
    this.navCtrl.push(ThomePage,{
      val: 'hello'
    })
  }
  
  }
    