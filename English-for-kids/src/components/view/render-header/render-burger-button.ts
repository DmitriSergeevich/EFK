import createElement from '../create-element';
import { asideMenu } from './render-aside';

export const pencet = createElement('div', ['pencet']);

function togleAsideMenu(): void {
  pencet.classList.toggle('diam');
  asideMenu.classList.toggle('active');
}

export default function renderBurger():HTMLElement {
  const burgerButton = createElement('div', ['menu-burger']);
  const burgerMenu = createElement('div', ['menu']);
  pencet.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
  `;
  burgerMenu.append(pencet);
  burgerButton.append(burgerMenu);
  burgerButton.addEventListener('click', () => togleAsideMenu());
  return burgerButton;
}
