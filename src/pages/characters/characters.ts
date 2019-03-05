import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterProvider } from '../../providers/character/character';
import { AddCharacterPage } from '../add-character/add-character';
import { CharacterUpdatePage } from '../character-update/character-update';
import { CharacterDetailsPage } from '../character-details/character-details';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CharactersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class CharactersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public characters: CharacterProvider, private alertCtrl: AlertController) {
  }
    
  goToAddCharacter(){
      this.navCtrl.push(AddCharacterPage);
  }
  
  goToDetails(i){
      this.navCtrl.push(CharacterDetailsPage, {id: i});
  }
  
  goToEdit(i){
      this.navCtrl.push(CharacterUpdatePage, {id: i});
  }
  
  removeChara(id){
      let alert = this.alertCtrl.create({
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this character?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              console.log('Confirm clicked');
              this.characters.removeCharacter(id);
              this.navCtrl.setRoot(CharactersPage);
            }
          }
        ]
      });
      alert.present();
  }

}
