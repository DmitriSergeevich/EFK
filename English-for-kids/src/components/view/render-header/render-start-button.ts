import createElement from '../create-element';
import './render-start-button.scss';

export const startButton = createElement('div', ['start-button', 'headen']);

export function renderStartButton(root: HTMLElement): void {
  startButton.innerHTML = 'Start game';
  root.append(startButton);
}
