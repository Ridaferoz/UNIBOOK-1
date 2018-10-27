import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagerequestPage } from '../messagerequest/messagerequest';
import { FriendrequestPage } from '../friendrequest/friendrequest';
import { StdhomePage } from '../stdhome/stdhome';
import { NotificationPage } from '../notification/notification';
import { FileChooser} from '@ionic-native/file-chooser';
import { File} from '@ionic-native/file';
// import { FilePath } from '@ionic-native/file-path';
import firebase from 'firebase';



/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser,private file: File) {

    console.log(navParams.get('val'));

  }
  // choose() {
  //   this.fileChooser.open().then((uri) => {
  //     alert(uri);

  //     this.filePath.resolveNativePath(uri).then(filePath => {
  //       alert(filePath);
  //       let dirPathSegments = filePath.split('/');
  //       let fileName = dirPathSegments[dirPathSegments.length-1];
  //       dirPathSegments.pop();
  //       let dirPath = dirPathSegments.join('/');
  //       this.file.readAsArrayBuffer(dirPath, fileName).then(async (buffer) => {
  //         await this.upload(buffer, fileName);
  //       }).catch((err) => {
  //         alert(err.toString());
  //       });
  

   choose(){

    this.fileChooser.open().then((uri)=>{
      alert(uri);

      this.file.resolveLocalFilesystemUrl(uri).then((newUrl)=>{
        alert(JSON.stringify(newUrl));

        let dirPath = newUrl.nativeURL;
        let dirPathSegments = dirPath.split('/')
        dirPathSegments.pop()
        dirPath = dirPathSegments.join('/')

        this.file.readAsArrayBuffer(dirPath, newUrl.name).then(async( buffer)=>{
         await this.upload(buffer, newUrl.name);
        })
      })
    })
  }
   async upload(buffer, name)
  {

    let blob = new Blob([buffer],{ type :"image/jpeg"});
    let storage = firebase.storage();

    storage.ref('images/' + name).put(blob).then((d)=>{
      alert("Done");
    }).catch ((error)=>{
      alert(JSON.stringify(error))
  

    })
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
noti(){
  this.navCtrl.push( NotificationPage,{
    val: 'hello'
  })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

}
