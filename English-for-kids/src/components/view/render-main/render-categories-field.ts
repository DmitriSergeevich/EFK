import { cardCategories, categoriesKeys } from '../../constants/constants';
import createElement from '../create-element';
import renderCategoryCard from '../render-category-card/render-category-card';
import { renderProgressField } from '../renderProgressField/renderProgressField';
import './render-categories-field.scss';

export default function renderCategoriesField(root: HTMLElement): void {
  const categoriesField = createElement('div', ['categories']);
  const categoriesContainer = createElement('div', ['container']);
  categoriesKeys.forEach((cat) => {
    // @ts-ignore
    const categoryImage = cardCategories[cat][0];
    categoriesContainer.append(renderCategoryCard(cat, categoryImage));
  });
  renderProgressField();
  categoriesField.append(categoriesContainer);
  root.append(categoriesField);
}
