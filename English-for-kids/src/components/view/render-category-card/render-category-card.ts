import { LOCATION_HASH, main, modeFlag } from '../../constants/constants';
import createElement from '../create-element';
//  import { main } from '../render-main/render-main';

import './render-categories-card.scss';

export default function renderCategoryCard(categoryName: string, categoryImg:string): HTMLElement {
  const categoryCard = createElement('div', ['category-card']);
  const imgURL = `https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/${categoryImg}.jpg`;

  categoryCard.innerHTML = `
    <div class="category-preview">
    </div>
    <div class="category-name">${categoryName}</div>
  `;
  const PREVIEW_INDEX_NUMBER = 1;
  const categoryPreviewElement: ChildNode = categoryCard.childNodes[PREVIEW_INDEX_NUMBER];
  (categoryPreviewElement as HTMLElement).style.background = `url("${imgURL}")`;
  (categoryPreviewElement as HTMLElement).style.backgroundSize = '150%';
  (categoryPreviewElement as HTMLElement).style.backgroundPosition = 'center';
  if (modeFlag) {
    categoryCard.classList.add('category-card__alt');
  }
  categoryCard.addEventListener('click', () => {
    main.innerHTML = '';
    // @ts-ignore
    window.location.hash = LOCATION_HASH[categoryName];
  });
  return categoryCard;
}
