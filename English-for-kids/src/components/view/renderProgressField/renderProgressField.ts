import { main } from '../../constants/constants';
import createElement from '../create-element';

//  import { main } from '../render-main/render-main';

import './renderProgressField.scss';

export const progressField = createElement('div', ['progress-field']);

export function renderProgressField(): void {
  main.prepend(progressField);
}
