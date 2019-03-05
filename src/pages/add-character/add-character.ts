import { Component } from '@angular/core';
import { CharacterProvider } from '../../providers/character/character';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharactersPage } from '../characters/characters';

/**
 * Generated class for the AddCharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-character',
  templateUrl: 'add-character.html',
})
export class AddCharacterPage {

  public chara;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public charProvider: CharacterProvider) {
       this.chara = JSON.parse(JSON.stringify(this.charProvider.CharacterModel));
  }

  submitCharacter(){
      this.charProvider.addCharacter(this.chara);
      this.navCtrl.push(CharactersPage);
  }
    
  /*ionViewDidLoad() { 
  }*/

}
