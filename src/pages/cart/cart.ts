import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartTypeEnum } from '../../model/CartTypeEnum';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  cartTypeEnum : CartTypeEnum = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    console.log(this.navParams);
    console.log(this.navParams.get('cartTypeEnum'));
    this.cartTypeEnum = this.navParams.get('cartTypeEnum');
  }

}
