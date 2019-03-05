import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the CharacterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CharacterProvider {
  
  public characters = [];
  public CharacterModel = {
      name: "",
      enchLevel: 15,
      destLevel: 15,
      conjLevel: 15,
      illLevel: 15,
      altLevel: 15,
      resLevel: 15,
      dplFire: 0,
      dplIce: 0,
      dplShock: 0,
      eplEnchanter: 0,
      epFire: false,
      epFrost: false,
      epStorm: false,
      epInsightful: false,
      epCorpus: false,
      epExtra: false,
      stability: false,
      kindred: false,
      animage: false,
      necromage: false,
      vampire: false
  };
    
    
  constructor(public storage: Storage) {
      //import characters
      //this.storage.clear();
      this.storage.forEach( (value, key, index) => {
          this.characters.push(value);
      });
      this.storage.clear();
      for(var i = 0; i < this.characters.length; i++){
          this.storage.set(i.toString(), this.characters[i]);
      }
      
  }
    
  addCharacter(chara){
      this.characters.push(chara);
      this.storage.set((this.characters.length-1).toString(), chara);
      console.log(this.storage.get((this.characters.length-1).toString()));
  }
   
  updateCharacter(chara, id){
      this.characters[id] = chara;
      this.storage.set((id).toString(), chara);
  }
    
  removeCharacter(id){
      this.characters.splice(id,1);
      this.storage.remove(id);
  }
    
  getCharacter(id){
      return this.characters[id];
  }

}

/*export class CharacterModel{
  public name = "";
  public enchLevel = 0;
  public dplFire = 0;
  public dplIce = 0;
  public dplShock = 0;
  public eplEnchanter = 0;
  public epFire = false;
  public epFrost = false;
  public epStorm = false;
  public epInsightful = false;
  public epCorpus = false;
  public stability = false;
  public kindred = false;
  public animage = false;
  public necromage = false;
  public vampire = false;
    
  constructor(){
      console.log("Character built");
  } 
}*/