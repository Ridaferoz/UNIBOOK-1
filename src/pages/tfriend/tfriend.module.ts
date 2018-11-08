import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TfriendPage } from './tfriend';

@NgModule({
  declarations: [
    TfriendPage,
  ],
  imports: [
    IonicPageModule.forChild(TfriendPage),
  ],
})
export class TfriendPageModule {}
