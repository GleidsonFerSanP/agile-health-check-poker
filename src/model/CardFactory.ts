import { CardTypeEnum } from "./CardTypeEnum";
import { Card } from "./Card";
import { Arrow } from "./Arrow";

export class CardFactory{

    constructor(){}

    public static CARD_TITLE_GREEN: String = "VERDE (vai manter)";
    public static CARD_TITLE_GREEN_UP: String = "VERDE (vai melhorar)";
    public static CARD_TITLE_GREEN_DOWN: String = "VERDE (vai piorar)";
    public static CARD_TITLE_YELLOW: String = "AMARELO (vai manter)";
    public static CARD_TITLE_YELLOW_UP: String = "AMARELO (vai melhorar)";
    public static CARD_TITLE_YELLOW_DOWN: String = "AMARELO (vai piorar)";
    public static CARD_TITLE_RED: String = "VERMELHO (vai manter)";
    public static CARD_TITLE_RED_UP: String = "VERMELHO (vai melhorar)";
    public static CARD_TITLE_RED_DOWN: String = "VERMELHO (vai piorar)";
    
    public static CSS_CARD_GREEN: String = "color-green";
    public static CSS_CARD_YELLOW: String = "color-yellow";
    public static CSS_CARD_RED: String = "color-red";
    
    public static ARROW_PATH_YELLOW: String = "assets/imgs/right-arrow-yellow.svg";
    public static ARROW_PATH_GREEN: String = "assets/imgs/right-arrow-green.svg";
    public static ARROW_PATH_RED: String = "assets/imgs/right-arrow-red.svg";
    
    public static CSS_ARROW: String = "";
    public static CSS_ARROW_UP: String = "rotate-up";
    public static CSS_ARROW_DOWN: String = "rotate-down";

    public static factory(cardType: CardTypeEnum): Card{

        switch (cardType) {
            case CardTypeEnum.GREEN:
                console.log("CardTypeEnum.GREEN");
                return new Card(CardFactory.CARD_TITLE_GREEN, cardType, CardFactory.CSS_CARD_GREEN, new Arrow(CardFactory.ARROW_PATH_YELLOW, CardFactory.CSS_ARROW), true);
            case CardTypeEnum.GREEN_UP:
                console.log("CardTypeEnum.GREEN_UP");
                return new Card(CardFactory.CARD_TITLE_GREEN_UP, cardType, CardFactory.CSS_CARD_GREEN, new Arrow(CardFactory.ARROW_PATH_GREEN, CardFactory.CSS_ARROW_UP), true);
            case CardTypeEnum.GREEN_DOWN:
                console.log("CardTypeEnum.GREEN_DOWN");
                return new Card(CardFactory.CARD_TITLE_GREEN_DOWN, cardType, CardFactory.CSS_CARD_GREEN, new Arrow(CardFactory.ARROW_PATH_RED, CardFactory.CSS_ARROW_DOWN), true);
            case CardTypeEnum.YELLOW:
                console.log("CardTypeEnum.YELLOW");
                return new Card(CardFactory.CARD_TITLE_YELLOW, cardType, CardFactory.CSS_CARD_YELLOW, new Arrow(CardFactory.ARROW_PATH_YELLOW, CardFactory.CSS_ARROW), true);
            case CardTypeEnum.YELLOW_UP:
                console.log("CardTypeEnum.YELLOW_UP");
                return new Card(CardFactory.CARD_TITLE_YELLOW_UP, cardType, CardFactory.CSS_CARD_YELLOW, new Arrow(CardFactory.ARROW_PATH_GREEN, CardFactory.CSS_ARROW_UP), true);
            case CardTypeEnum.YELLOW_DOWN:
                console.log("CardTypeEnum.YELLOW_DOWN");
                return new Card(CardFactory.CARD_TITLE_YELLOW_DOWN, cardType, CardFactory.CSS_CARD_YELLOW, new Arrow(CardFactory.ARROW_PATH_RED, CardFactory.CSS_ARROW_DOWN), true);
            case CardTypeEnum.RED:
                console.log("CardTypeEnum.RED");
                return new Card(CardFactory.CARD_TITLE_RED, cardType, CardFactory.CSS_CARD_RED, new Arrow(CardFactory.ARROW_PATH_YELLOW, CardFactory.CSS_ARROW), true);
            case CardTypeEnum.RED_UP:
                console.log("CardTypeEnum.RED_UP");
                return new Card(CardFactory.CARD_TITLE_RED_UP, cardType, CardFactory.CSS_CARD_RED, new Arrow(CardFactory.ARROW_PATH_GREEN, CardFactory.CSS_ARROW_UP), true);
            case CardTypeEnum.RED_DOWN:
                console.log("CardTypeEnum.RED_DOWN");
                return new Card(CardFactory.CARD_TITLE_RED_DOWN, cardType, CardFactory.CSS_CARD_RED, new Arrow(CardFactory.ARROW_PATH_RED, CardFactory.CSS_ARROW_DOWN), true);
        }                
    }


}