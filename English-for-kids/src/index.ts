import { app } from './components/constants/constants';
import { addButtonListener } from './components/controller/createListeners';
import router from './components/controller/router';
import renderHeader from './components/view/render-header/render-header';
import renderMain from './components/view/render-main/render-main';
import './styles.scss';

// export const app: HTMLElement | null = document.getElementById('app');
if (app) {
  renderHeader(app);
  renderMain(app);
  addButtonListener();
}

const loc = window.location;

let oldHash = loc.hash;
loc.hash = '#main';
setInterval(() => {
  const newHash = loc.hash;
  if (newHash !== oldHash) {
    router(newHash);
    oldHash = newHash;
  }
}, 100);
