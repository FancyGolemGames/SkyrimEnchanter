import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterUpdatePage } from './character-update';

@NgModule({
  declarations: [
    CharacterUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterUpdatePage),
  ],
})
export class CharacterUpdatePageModule {}
