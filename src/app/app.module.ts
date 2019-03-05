import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { File } from '@ionic-native/file';
import { HttpClientModule } from '@angular/common/http';

import { CharactersPage } from '../pages/characters/characters';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddCharacterPage } from '../pages/add-character/add-character';
import { CharacterUpdatePage } from '../pages/character-update/character-update';
import { CharacterDetailsPage } from '../pages/character-details/character-details';
import { EnchantmentSelectPage } from '../pages/enchantment-select/enchantment-select';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CharacterProvider } from '../providers/character/character';
import { EnchantmentProvider } from '../providers/enchantment/enchantment';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CharactersPage,
    TabsPage,
    AddCharacterPage,
    CharacterDetailsPage,
    CharacterUpdatePage,
    EnchantmentSelectPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CharactersPage,
    HomePage,
    TabsPage,
    AddCharacterPage,
    CharacterDetailsPage,
    CharacterUpdatePage,
    EnchantmentSelectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CharacterProvider,
    EnchantmentProvider,
    File
  ]
})
export class AppModule {}
