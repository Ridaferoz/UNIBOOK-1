import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { TmsgPage } from '../tmsg/tmsg';
import { TfriendPage } from '../tfriend/tfriend';
import { ThomePage } from '../thome/thome';

/**
 * Generated class for the TfindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tfind',
  templateUrl: 'tfind.html',
})
export class TfindPage {

  people 
  items : Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,public actionSheetCtrl: ActionSheetController) {
    this.items =this.db.list('/teachers').valueChanges();
  }
  getTopics(ev: any) {
    var people = this.generatePeople();
    console.log(people);
    let serVal = ev.target.value;
    var final =[]
    if (serVal && serVal.trim() != '') {
       
       for (let index = 0; index < people.length; index++) {
         //if(people[index].indexOf(serVal)>=0){
          final.push(people[index]);
         //}
         
       }
    }
    console.log(final);
    console.log("===============");
    this.people = final;
    console.log(this.people);
  }
   generatePeople(): String[]{
     var people = new Array<String>();
    this.items.forEach((value)=>{
      // for (let index = 0; index < value.length; index++) {
      //   const element = value[index];
      //   people.push(element);
        
      // }

      console.log(value);


    });
    console.log({people});
    console.log(people);
    console.log("generate");
    return people;
  }
  showOptions(teachersId, teachersName) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Delete teachers',
          role: 'destructive',
          handler: () => {
            this.removeTeachers(teachersId);
          }
        },{
          text: 'Update Name',
          handler: () => {
            this.updateTeachers(teachersId, teachersName);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  removeTeachers(teachersId: string){
    alert("delete Student");  
    //this.items.remove(studentId);
  }

  updateTeachers(teachersId, teachersName){
    alert("update called");
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

}

