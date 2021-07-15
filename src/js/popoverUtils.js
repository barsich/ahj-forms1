export function popoverCreation() {
  const popover = document.createElement('div');
  popover.classList.add('popover');

  const popoverHeader = document.createElement('h3');
  popoverHeader.classList.add('popover-header');
  popoverHeader.textContent = 'Popover title';

  const popoverBody = document.createElement('div');
  popoverBody.classList.add('popover-body');
  popoverBody.textContent = "And here's some amazing content. It's very engaging. Right?";

  const popoverArrow = document.createElement('div');
  popoverArrow.classList.add('popover-arrow');

  popover.appendChild(popoverHeader);
  popover.appendChild(popoverBody);
  popover.appendChild(popoverArrow);

  return popover;
}

export function calcPopoverPosition(button, popover) {
  const { top, left } = button.getBoundingClientRect();
  const popoverTop = `calc(${window.scrollY + top - popover.offsetHeight}px - 0.7rem)`;
  const popoverLeft = `${
    window.scrollX + left + button.offsetWidth / 2 - popover.offsetWidth / 2
  }px`;
  return [popoverTop, popoverLeft];
}
