const ALERT_SHOW_TIME = 5000;

function doThingsIndex() {
  const titleBlock = $('.upper-block .block');
  const buttonOne = $('.btn-warning');
  const buttonTwo = $('.btn-success');
  buttonOne.on('click', function() {
  titleBlock.toggleClass('block--opened');
  titleBlock.toggleClass('block--closed');
})

buttonTwo.on('click', function() {
  const allMiddleBlocks = $('.middle-blocks .block:lt(2)');
  if (allMiddleBlocks.length < 2) {
    alert('Элементов должно быть не менее чем два');
  }
  const firstBlock = allMiddleBlocks[0];
  const secondBlock = allMiddleBlocks[1];
  secondBlock.after(firstBlock);
})

$(document).ready(function(evt) {
  const modal = $('.modal');
  modal.css("display", "block")
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
  }, ALERT_SHOW_TIME);
});
}

export { doThingsIndex }

