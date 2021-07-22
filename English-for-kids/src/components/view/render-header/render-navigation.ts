import createElement from '../create-element';
import renderAside from './render-aside';
import renderBurger from './render-burger-button';

export default function renderNavigation(root:HTMLElement): void {
  const nav = createElement('nav', ['navigation']);
  nav.append(renderBurger());
  nav.append(renderAside());
  root.append(nav);
}
