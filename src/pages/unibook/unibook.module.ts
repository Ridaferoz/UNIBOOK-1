import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnibookPage } from './unibook';

@NgModule({
  declarations: [
    UnibookPage,
  ],
  imports: [
    IonicPageModule.forChild(UnibookPage),
  ],
})
export class UnibookPageModule {}
