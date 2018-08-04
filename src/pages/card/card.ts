import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Card } from '../../model/Card';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  card : Card = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
    
  }

  ionViewDidLoad() {
    console.log("M=ionViewDidLoad,  navParams=", this.navParams)
    this.card = this.navParams.get('card');
    console.log("M=ionViewDidLoad,  card=", this.card)
    var $card_content = document.getElementById('this_card_content');
    console.log("M=ionViewDidLoad,  $card_content=", $card_content)
    let height = (this.platform.height() - 76);
    console.log("M=ionViewDidLoad,  height=", height)
    $card_content.style.height =  height + "px";
  }

}
