import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnchantmentSelectPage } from './enchantment-select';

@NgModule({
  declarations: [
    EnchantmentSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(EnchantmentSelectPage),
  ],
})
export class EnchantmentSelectPageModule {}
