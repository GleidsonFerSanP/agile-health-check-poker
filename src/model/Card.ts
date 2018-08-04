import { CardTypeEnum } from "./CardTypeEnum";
import { Arrow } from "./Arrow";

export class Card{
    title: String;
    type: CardTypeEnum;
    cssClass: String;
    arrow: Arrow;

    constructor(title: String, type: CardTypeEnum, cssClass: String, arrow: Arrow){
        this.title = title;
        this.type = type;
        this.cssClass = cssClass;
        this.arrow = arrow;
    }
}