import { simbol } from '../constants/constants';
import {
  checkWord,
  clickOnStartButton, clickOnSwitcher, rotateCard, sayWord, sideBarButtonsHandler,
} from '../models/models';
import { asideMenu } from '../view/render-header/render-aside';
import { pencet } from '../view/render-header/render-burger-button';
import { startButton } from '../view/render-header/render-start-button';
import { onOffSwitch } from '../view/render-header/render-switcher';

export function addButtonListener(): void {
  const sideBarLinks = document.querySelectorAll('li');
  sideBarLinks.forEach((el) => el.addEventListener('click', () => {
    event?.preventDefault();
    const buttonInners = el.innerHTML;
    sideBarButtonsHandler(buttonInners);
    asideMenu.classList.remove('active');
    pencet.classList.remove('diam');
  }));

  onOffSwitch.addEventListener('change', clickOnSwitcher);

  startButton.addEventListener('click', clickOnStartButton);
}

export function addCardListener(word: string, card?: HTMLElement): void {
  if (card !== undefined) {
    checkWord(word, card!);
  } else {
    sayWord(word);
  }
}
