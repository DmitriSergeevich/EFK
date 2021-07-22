import createElement from '../view/create-element';

export const cardCategories = {
  'Animals (set A)': ['bird', 'cat', 'chick', 'dog', 'dolphin', 'fish1', 'frog', 'giraffe'],
  'Animals (set B)': ['horse', 'chicken', 'turtle', 'sheep', 'rabbit', 'pig', 'mouse', 'lion'],
  'Actions (set A)': ['hug', 'swim', 'fly', 'fish', 'draw', 'dive', 'dance', 'cry'],
  'Actions (set B)': ['skip', 'sing', 'run', 'ride', 'point', 'play', 'open', 'jump'],
  Emotion: ['happy', 'surprised', 'scared', 'angry', 'laugh', 'sad', 'smile', 'tired'],
  Clothers: ['skirt', 'shoe', 'shirt', 'pants', 'dress', 'coat', 'boot', 'blouse'],
};
export const cardCategoriesRus = {
  'Animals (set A)': ['птица', 'кошка', 'цыпленок', 'собака', 'дельфин', 'рыба', 'лягушка', 'жираф'],
  'Animals (set B)': ['лошадь', 'курица', 'черепаха', 'овца', 'кролик', 'свинья', 'мыш', 'лев'],
  'Actions (set A)': ['обнимать', 'плавать', 'летать', 'рыбачить', 'рисовать', 'нырять', 'танцевать', 'плакать'],
  'Actions (set B)': ['пропускать, прыгать', 'петь', 'бегать', 'ездить', 'указывать', 'играть', 'открывать', 'прыгать'],
  Emotion: ['счастливый', 'удивленный', 'испуганный', 'сердитый', 'смех', 'грустный', 'улыбка', 'уставший'],
  Clothers: ['юбка', 'туфли', 'футболка', 'штаны', 'платье', 'пальто', 'ботинок', 'блузка'],
};
export const categoriesKeys = Object.keys(cardCategories);

export const LOCATION_HASH = {
  MAIN_PAGE: 'main',
  'Animals (set A)': 'animal/A',
  'Animals (set B)': 'animal/B',
  'Actions (set A)': 'action/A',
  'Actions (set B)': 'action/B',
  Emotion: 'emotion',
  Clothers: 'clothes',
};

export const LENGTH_OF_CARDS_ARRAY = 7;
export const LOSE_POINT_SOUND = 'https://audio.code.org/losepoint2.mp3';
export const GOAL_POINT_SOUND = 'https://audio.code.org/goal1.mp3';
export const WIN_SOUND = 'https://audio.code.org/win1.mp3';
export const FAIL_SOUND = 'https://audio.code.org/failure2.mp3';

export let modeFlag = false;

export function modeFlagHandler(): void {
  if (modeFlag) {
    modeFlag = false;
  } else {
    modeFlag = true;
  }
}

export let curCategory = '';
export function curCategoryHandler(category: string): void {
  curCategory = category;
}

export const app: HTMLElement | null = document.getElementById('app');
export const main: HTMLElement = createElement('main', ['main']);
export const simbol = createElement('div', ['rotate-simbol']);
