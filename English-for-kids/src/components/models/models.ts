// import { app } from '../..';

import {
  app,
  cardCategories, curCategory, FAIL_SOUND, GOAL_POINT_SOUND, LENGTH_OF_CARDS_ARRAY,
  LOCATION_HASH, LOSE_POINT_SOUND, main, modeFlag, modeFlagHandler, WIN_SOUND,
} from '../constants/constants';
import { startButton } from '../view/render-header/render-start-button';
import renderCategoriesField from '../view/render-main/render-categories-field';
import renderGameField from '../view/render-main/render-game-field';
//  import { main } from '../view/render-main/render-main';

import { endGameWindow, renderEndGameWindow } from '../view/renderEndGameWindow/renderEndGameWindow';
import { addEmptyStar } from '../view/renderProgressField/renderEmptyStar';
import { addGoldenStar } from '../view/renderProgressField/renderGoldenStar';
import { progressField } from '../view/renderProgressField/renderProgressField';

export let gameStatus = false;

export function gameStatusHandler(): void {
  if (gameStatus) {
    gameStatus = false;
  } else {
    gameStatus = true;
  }
}

export function rotateCard(el: HTMLElement): void {
  el.classList.add('flipped');
  el.addEventListener('mouseleave', () => {
    el.classList.remove('flipped');
  });
}

export function clearElement(element: HTMLElement): void {
  element.innerHTML = '';
}

export function windowLocationHandler(hash: string): void {
  window.location.hash = hash;
}

export function sideBarButtonsHandler(buttonInners: string): void {
  switch (buttonInners) {
    case 'Main': windowLocationHandler(LOCATION_HASH.MAIN_PAGE);
      break;
    case 'Animal (set A)': windowLocationHandler(LOCATION_HASH['Animals (set A)']);
      break;
    case 'Animal (set B)': windowLocationHandler(LOCATION_HASH['Animals (set B)']);
      break;
    case 'Action (set A)': windowLocationHandler(LOCATION_HASH['Actions (set A)']);
      break;
    case 'Action (set B)': windowLocationHandler(LOCATION_HASH['Actions (set B)']);
      break;
    case 'Emotion': windowLocationHandler(LOCATION_HASH.Emotion);
      break;
    case 'Clothes': windowLocationHandler(LOCATION_HASH.Clothers);
      break;
    default:
      break;
  }
}

export function sayWord(word: string): void {
  const audio = new Audio(`https://wooordhunt.ru/data/sound/sow/us/${word}.mp3`);
  audio.play();
}

export function categoriesCardStyleChanger(): void {
  const currHash = window.location.hash;

  if (currHash === '#main' && modeFlag) {
    clearElement(main);
    renderCategoriesField(main);
  } else if (currHash === '#main' && !modeFlag) {
    clearElement(main);
    renderCategoriesField(main);
  } else {
    clearElement(main);
    renderGameField(curCategory, main);
  }
}

let currWord = 0;
let shafledArr: Array<string>;
let errorCount = 0;

function shuffleArray(): void {
  const array = cardCategories[curCategory];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  shafledArr = array;
}

export function startButtonStyling(): void {
  if (gameStatus) {
    startButton.classList.add('repeat');
    startButton.innerHTML = 'Repeat';
  } else {
    startButton.classList.remove('repeat');
    setTimeout(() => { startButton.innerHTML = 'Start game'; }, 300);
  }
}

export function startButtonHandler(): void {
  const currLocation = window.location.hash;
  if (!gameStatus && modeFlag && currLocation !== '#main') {
    startButton.classList.remove('headen');
    startButtonStyling();
  } else if (gameStatus) {
    gameStatus = false;
    startButtonStyling();
    startButton.classList.add('headen');
  } else if (!gameStatus) {
    startButton.classList.add('headen');
  }
}

export function clickOnSwitcher(): void {
  modeFlagHandler();
  categoriesCardStyleChanger();
  startButtonHandler();
}

export function clickOnStartButton(): void {
  if (!gameStatus) {
    gameStatusHandler();
    shuffleArray();
    startButtonStyling();
    sayWord(shafledArr[currWord]);
  } else {
    sayWord(shafledArr[currWord]);
  }
}

function playSound(url: string): void {
  const audio = new Audio(url);
  audio.play();
}

export function stateReboot(): void {
  progressField.innerHTML = '';
  errorCount = 0;
  currWord = 0;
  gameStatus = false;
  startButtonHandler();
}

export function finishGame(): void {
  setTimeout(() => {
    app!.removeChild(endGameWindow);
  }, 5000);
  window.location.hash = 'main';
  stateReboot();
}

function cardsMatched(): void {
  playSound(GOAL_POINT_SOUND);
  addGoldenStar();
  currWord += 1;
  if (currWord <= LENGTH_OF_CARDS_ARRAY) {
    setTimeout(() => sayWord(shafledArr[currWord]), 500);
  } else {
    if (!errorCount) {
      renderEndGameWindow(true);
      playSound(WIN_SOUND);
    } else {
      renderEndGameWindow(false, errorCount);
      playSound(FAIL_SOUND);
    }
    finishGame();
  }
}

function cardsDontMatch(): void {
  playSound(LOSE_POINT_SOUND);
  addEmptyStar();
  errorCount += 1;
}

export function checkWord(word: string, el: HTMLElement): void {
  if (gameStatus) {
    if (word === cardCategories[curCategory][currWord]) {
      el.classList.add('card-container__disabled');
      cardsMatched();
    } else {
      cardsDontMatch();
    }
  }
}
