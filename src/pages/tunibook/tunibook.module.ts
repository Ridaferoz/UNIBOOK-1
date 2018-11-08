import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TunibookPage } from './tunibook';

@NgModule({
  declarations: [
    TunibookPage,
  ],
  imports: [
    IonicPageModule.forChild(TunibookPage),
  ],
})
export class TunibookPageModule {}
