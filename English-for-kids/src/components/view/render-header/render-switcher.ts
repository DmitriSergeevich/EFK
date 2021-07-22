import createElement from '../create-element';

const swither = createElement('div', ['game-mode']);
export const onOffSwitch = createElement('div', ['onoffswitch']);

export default function renderSwither(root: HTMLElement): void {
  swither.append(onOffSwitch);
  onOffSwitch.innerHTML = `
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
    <label class="onoffswitch-label" for="myonoffswitch">
      <span class="onoffswitch-inner"></span>
      <span class="onoffswitch-switch"></span>
    </label>
  `;
  root.append(swither);
}
