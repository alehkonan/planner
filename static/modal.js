const triggers = document.querySelectorAll('[data-modal-trigger]');

const dialog = document.createElement('dialog');
dialog.innerText = 'Modal content';
document.body.append(dialog);

triggers.forEach((trigger) =>
  trigger.addEventListener('click', () => dialog.showModal())
);
