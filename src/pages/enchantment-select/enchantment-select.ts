import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnchantmentProvider } from '../../providers/enchantment/enchantment';

/**
 * Generated class for the EnchantmentSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enchantment-select',
  templateUrl: 'enchantment-select.html',
})
export class EnchantmentSelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public enchProvider: EnchantmentProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnchantmentSelectPage');
  }

}
