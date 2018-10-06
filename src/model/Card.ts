import { CardTypeEnum } from "./CardTypeEnum";
import { Arrow } from "./Arrow";

export class Card{
    title: String;
    type: CardTypeEnum;
    cssClass: String;
    arrow: Arrow;
    showArrow: Boolean;

    constructor(title: String, type: CardTypeEnum, cssClass: String, arrow: Arrow, showArrow: Boolean){
        this.title = title;
        this.type = type;
        this.cssClass = cssClass;
        this.arrow = arrow;
        this.showArrow = showArrow;
    }
}