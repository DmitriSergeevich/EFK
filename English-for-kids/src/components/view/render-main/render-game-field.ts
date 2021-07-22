import {
  cardCategories, cardCategoriesRus, curCategoryHandler, main,
} from '../../constants/constants';
import createElement from '../create-element';
import renderGameCard from '../render-game-card/render-game-card';
import { renderProgressField } from '../renderProgressField/renderProgressField';
import './render-game-field.scss';
//  import { main } from './render-main';

//  export let curCategory = '';

export default function renderGameField(categoryName: string, root?: HTMLElement): void {
  //  curCategory = categoryName;
  curCategoryHandler(categoryName);
  const gameField = createElement('div', ['card-field']);
  const gameContainer = createElement('div', ['container']);
  // @ts-ignore
  const catArrEng = cardCategories[categoryName];
  // @ts-ignore
  const catArrRus = cardCategoriesRus[categoryName];

  for (let i = 0; i < catArrEng.length; i++) {
    const engWord = catArrEng[i];
    const rusWord = catArrRus[i];
    gameContainer.append(renderGameCard(engWord, rusWord));
  }
  gameField.append(gameContainer);
  if (root) {
    root.append(gameField);
  } else {
    main.append(gameField);
  }
  renderProgressField();
}
