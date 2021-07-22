import { main } from '../../constants/constants';
import createElement from '../create-element';
import renderCategoriesField from './render-categories-field';

//  export const main: HTMLElement = createElement('main', ['main']);

export default function renderMain(root: HTMLElement): void {
  renderCategoriesField(main);
  root.append(main);
}
