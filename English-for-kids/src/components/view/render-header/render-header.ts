import createElement from '../create-element';
import renderNavigation from './render-navigation';
import './render-header.scss';
import renderSwither from './render-switcher';
import { renderStartButton } from './render-start-button';

export const header = createElement('header', ['header']);

export default function renderHeader(root: HTMLElement): void {
  renderNavigation(header);
  renderStartButton(header);
  renderSwither(header);
  root.prepend(header);
}
