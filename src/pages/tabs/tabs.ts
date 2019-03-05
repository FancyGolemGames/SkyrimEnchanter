import { Component } from '@angular/core';

import { CharactersPage } from '../characters/characters';
import { EnchantmentSelectPage } from '../enchantment-select/enchantment-select';
import { CharacterProvider } from '../../providers/character/character';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

    //TODO: Implement hiding the enchantments button if there are no characters stored.
    
  tab1Root = EnchantmentSelectPage;
  tab2Root = CharactersPage;

  constructor(public characters: CharacterProvider) {
      
  }
  
}
