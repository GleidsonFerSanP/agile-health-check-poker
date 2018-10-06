import { Component, ViewChild, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController, Platform, ModalController, Slides } from 'ionic-angular';
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

  @ViewChild(Slides) slides: Slides;
  sliderOptions: any = {
    effect: 'cube',
    noSwiping: true,
    direction: 'vertical'
  };

  cards = [];

  constructor(public navCtrl: NavController, private screenOrientation: ScreenOrientation, private platform: Platform, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log("M=ionViewDidLoad,  platform=", this.platform)

   /* if(this.platform.is('android') || this.platform.is('ios')){
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.screenOrientation.unlock();
    }*/

    for (let index = CardTypeEnum.GREEN; index <= CardTypeEnum.RED_DOWN; index++) {

      this.cards.push(CardFactory.factory(index));      
    }
    console.log("M=ionViewDidLoad,  cards=", this.cards)
  }

  openCardBkp(cardTypeEnum: CardTypeEnum) {
    let cardModal = this.modalCtrl.create(CardPage, { card: this.getCard(cardTypeEnum)}, {
      enterAnimation: 'modal-scale-up-enter',
      leaveAnimation: 'modal-scale-up-leave'
    });
    cardModal.present();
  }

  openCard(cardTypeEnum: CardTypeEnum){
    console.log("M=openCard,  cardTypeEnum=", cardTypeEnum);
    let card = this.getCard(cardTypeEnum);
    card.showArrow = true;
    this.navCtrl.push(CardPage, { card: card});
  }

  private getCard(cardTypeEnum: CardTypeEnum): Card{    
    console.log("M=getCard,  cardTypeEnum=", cardTypeEnum)
    let card = this.cards[cardTypeEnum]
    console.log("M=getCard,  card=", card)
    return card;
  }

}
