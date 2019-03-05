import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CharacterProvider } from '../../providers/character/character';
import { CharactersPage } from '../characters/characters';

/**
 * Generated class for the CharacterUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-update',
  templateUrl: 'character-update.html',
})
export class CharacterUpdatePage {

  public chara;
  public id;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public characters: CharacterProvider) {
      this.id = navParams.get("id");
      this.chara = this.characters.characters[this.id];
  }

  submitCharacter(){
      this.characters.updateCharacter(this.chara, this.id);
      this.navCtrl.push(CharactersPage);
  }

}
