import { main } from '../constants/constants';
import { clearElement, stateReboot } from '../models/models';
import renderCategoriesField from '../view/render-main/render-categories-field';
import renderGameField from '../view/render-main/render-game-field';
//  import { main } from '../view/render-main/render-main';

export default function router(rout: string): void {
  stateReboot();
  switch (rout) {
    case '#main':
      clearElement(main);
      renderCategoriesField(main);
      break;
    case '#animal/A':
      clearElement(main);
      renderGameField('Animals (set A)', main);
      break;
    case '#animal/B':
      clearElement(main);
      renderGameField('Animals (set B)', main);
      break;
    case '#action/A':
      clearElement(main);
      renderGameField('Actions (set A)', main);
      break;
    case '#action/B':
      clearElement(main);
      renderGameField('Actions (set B)', main);
      break;
    case '#emotion':
      clearElement(main);
      renderGameField('Emotion', main);
      break;
    case '#clothes':
      clearElement(main);
      renderGameField('Clothers', main);
      break;
    default:
      break;
  }
}
