import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagerequestPage } from '../messagerequest/messagerequest';
import { FriendrequestPage } from '../friendrequest/friendrequest';
import { StdhomePage } from '../stdhome/stdhome';
import { NotificationPage } from '../notification/notification';
import { AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the FindpeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-findpeople',
  templateUrl: 'findpeople.html',
})
export class FindpeoplePage {
  
  people 
  items : Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,public actionSheetCtrl: ActionSheetController) {
    this.items =this.db.list('/students').valueChanges();
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
  showOptions(studentId, studentName) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Delete Student',
          role: 'destructive',
          handler: () => {
            this.removeStudent(studentId);
          }
        },{
          text: 'Update Name',
          handler: () => {
            this.updateStudent(studentId, studentName);
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

  removeStudent(studentId: string){
    alert("delete Student");  
    //this.items.remove(studentId);
  }

  updateStudent(studentId, studentName){
    alert("update called");
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

load6(){
  this.navCtrl.push(NotificationPage,{
    val: 'hello'
  })
  }
}
