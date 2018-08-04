import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { CardTypeEnum } from '../../model/CardTypeEnum';
import { Card } from '../../model/Card';
import { CardFactory } from '../../model/CardFactory';
import { CardPage } from '../card/card';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards = [];

  constructor(public navCtrl: NavController, private screenOrientation: ScreenOrientation, private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log("M=ionViewDidLoad,  platform=", this.platform)

    if(this.platform.is('android') || this.platform.is('ios')){
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.screenOrientation.unlock();
    }

    for (let index = CardTypeEnum.GREEN; index <= CardTypeEnum.RED_DOWN; index++) {

      this.cards.push(CardFactory.factory(index));      
    }
    console.log("M=ionViewDidLoad,  cards=", this.cards)
  }

  openCard(cardTypeEnum: CardTypeEnum){
    console.log("M=openCard,  cardTypeEnum=", cardTypeEnum)
    this.navCtrl.push(CardPage, { card: this.getCard(cardTypeEnum)});
  }

  private getCard(cardTypeEnum: CardTypeEnum): Card{    
    console.log("M=getCard,  cardTypeEnum=", cardTypeEnum)
    let card = this.cards[cardTypeEnum]
    console.log("M=getCard,  card=", card)
    return card;
  }

}
