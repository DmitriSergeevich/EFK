// import { app } from '../../..';

import { app } from '../../constants/constants';
import createElement from '../create-element';
import './renderEndGameWindow.scss';

export const endGameWindow = createElement('div', ['endGameWindow']);

export function renderEndGameWindow(result: boolean, errorsNumber?: number): void {
  if (result) {
    endGameWindow.innerHTML = `
    GOOD job Bro!
    `;
    const winImg = createElement('div', ['endGameWindow-img', 'endGameWindow-img__win']);
    endGameWindow.append(winImg);
  } else {
    endGameWindow.innerHTML = `
    <span class="errors-number">${errorsNumber}</span> errors God damn...<br>
    Work hard! Play hard!    `;
    const loseImg = createElement('div', ['endGameWindow-img', 'endGameWindow-img__lose']);
    endGameWindow.append(loseImg);
  }
  app?.prepend(endGameWindow);
}
