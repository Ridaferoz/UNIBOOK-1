import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TmsgPage } from './tmsg';

@NgModule({
  declarations: [
    TmsgPage,
  ],
  imports: [
    IonicPageModule.forChild(TmsgPage),
  ],
})
export class TmsgPageModule {}
