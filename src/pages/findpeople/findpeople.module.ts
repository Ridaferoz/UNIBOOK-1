import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindpeoplePage } from './findpeople';

@NgModule({
  declarations: [
    FindpeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(FindpeoplePage),
  ],
})
export class FindpeoplePageModule {}
