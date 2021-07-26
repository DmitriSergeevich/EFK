import { modeFlag } from '../../constants/constants';
import { addCardListener } from '../../controller/createListeners';
import createElement from '../create-element';
import './render-game-card.scss';
import rotateSimbol from './rotate-simbol';

export default function renderGameCard(engWord: string, rusWord: string): HTMLElement {
  const gameCard = createElement('div', ['card-container']);
  const card = createElement('div', ['card']);
  const cardFront = createElement('div', ['card__front']);
  const cardBack = createElement('div', ['card__back']);
  const cardItems = createElement('div', ['card-items']);
  const imgURL = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master'
    + `/tasks/rslang/english-for.kids.data/img/${engWord}.jpg`;
  cardItems.innerHTML = `
    <div class="card-name">${engWord}</div>
  `;
  if (!modeFlag) {
    cardBack.innerHTML = `
  <div class="card-items">
    <div class="card-name card-name_back">${rusWord}</div>
  </div>
  `;
    cardItems.append(rotateSimbol(gameCard));
    cardFront.append(cardItems);
    cardFront.addEventListener('click', () => addCardListener(engWord));
  } else {
    cardFront.addEventListener('click', () => addCardListener(engWord, gameCard));
  }

  card.append(cardFront);
  card.append(cardBack);
  gameCard.append(card);

  cardBack.style.background = `url("${imgURL}")`;
  cardBack.style.backgroundSize = 'cover';
  cardBack.style.backgroundPosition = 'center';
  cardFront.style.background = `url("${imgURL}")`;
  cardFront.style.backgroundSize = 'cover';
  cardFront.style.backgroundPosition = 'center';

  return gameCard;
}
