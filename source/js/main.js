import { doThingsIndex } from './index-code.js';
import { doThingsForm } from './form-code.js';

$(document).ready(function(evt) {
  const modal = $('.modal');
  modal.show();
  const modalButtons = $('.modal button');
  modalButtons.on('click', (evt) => {
    modal.hide();
  })
  $(document).on('keydown', (evt) => {
    if (evt.key === 'Escape') {
      modal.hide();
    }
  });

  $(document).on('mouseup', (evt) => {
    const modalContainer = $('.modal-content');
    if(!modalContainer.is(evt.target)  && modalContainer.has(evt.target).length === 0 ) {
      modal.hide();
    }
  })

  setTimeout(() => {
    modal.hide();
  }, 5000);
});

doThingsIndex();

doThingsForm();



