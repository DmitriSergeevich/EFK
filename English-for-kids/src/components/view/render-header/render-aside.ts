import createElement from '../create-element';

export const asideMenu = createElement('div', ['menu-navigation']);
export default function renderAside(): HTMLElement {
  asideMenu.innerHTML = `
  <ul class="nav-bar">
    <a href=""><li>Main</li></a>
    <a href=""><li>Animal (set A)</li></a>
    <a href=""><li>Animal (set B)</li></a>
    <a href=""><li>Action (set A)</li></a>
    <a href=""><li>Action (set B)</li></a>
    <a href=""><li>Emotion</li></a>
    <a href=""><li>Clothes</li></a>
  </ul>
  `;
  return asideMenu;
}
