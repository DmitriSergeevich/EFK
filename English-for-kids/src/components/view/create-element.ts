export default function createElement(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = []): HTMLElement {
  const element = document.createElement(tag);
  element.classList.add(...styles);
  return element;
}
