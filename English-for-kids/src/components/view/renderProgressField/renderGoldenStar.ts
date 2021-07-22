import createElement from '../create-element';
import { progressField } from './renderProgressField';

export function addGoldenStar(): void {
  const goldenStar = createElement('div', ['progress-field-star', 'progress-field-star__golden']);
  progressField.append(goldenStar);
}
