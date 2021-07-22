import createElement from '../create-element';
import { progressField } from './renderProgressField';

export function addEmptyStar(): void {
  const emptyStar = createElement('div', ['progress-field-star', 'progress-field-star__empty']);
  progressField.append(emptyStar);
}
