import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { CartTypeEnum } from '../../model/CartTypeEnum';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openCart(cartName: String){

    console.log(cartName);
    this.navCtrl.push(CartPage, { cartTypeEnum: this.getCartTypeEnum(cartName) });

  }

  private getCartTypeEnum(cartName: String): CartTypeEnum{

    switch (cartName) {
      case 'GREEN':
        return CartTypeEnum.GREEN;
      case 'GREEN_UP':
        return CartTypeEnum.GREEN_UP;
      case 'GREEN_DOWN':
        return CartTypeEnum.GREEN_DOWN;
      case 'YELLOW':
        return CartTypeEnum.YELLOW;
      case 'YELLOW_UP':
        return CartTypeEnum.YELLOW_UP;
      case 'YELLOW_DOWN':
        return CartTypeEnum.YELLOW_DOWN;
      case 'RED':
        return CartTypeEnum.RED;
      case 'RED_UP':
        return CartTypeEnum.RED_UP;
      case 'RED_DOWN':
        return CartTypeEnum.RED_DOWN;
    }

  }


}
