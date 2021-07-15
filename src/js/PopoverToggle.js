import { popoverCreation, calcPopoverPosition } from './popoverUtils';

export default class PopoverToggle {
  constructor() {
    this.container = document.querySelector('.container');
    this.button = document.querySelector('.popover-toggle');
    this.togglePopover = this.togglePopover.bind(this);
    this.popover = null;
  }

  init() {
    this.button.addEventListener('click', this.togglePopover);
  }

  togglePopover() {
    if (this.popover !== null) {
      this.popover.remove();
      this.popover = null;
    } else {
      this.popover = popoverCreation();
      this.container.appendChild(this.popover);
      const [top, left] = calcPopoverPosition(this.button, this.popover);
      this.popover.style.top = top;
      this.popover.style.left = left;
    }
  }
}
