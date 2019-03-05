import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CharacterProvider } from '../../providers/character/character';
/**
 * Generated class for the CharacterDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-details',
  templateUrl: 'character-details.html',
})
export class CharacterDetailsPage {

    private id;
    private Chara;
    
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public characters: CharacterProvider) {
      this.id = navParams.get("id");
      this.Chara = this.characters.characters[this.id];
  }

}
