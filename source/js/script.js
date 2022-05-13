const buttonOne = $('.btn-warning');
const buttonTwo = $('.btn-success');
const titleBlock = $('.upper-block .block');

buttonOne.on('click', function() {
  titleBlock.toggleClass('block--opened');
  titleBlock.toggleClass('block--closed');
})

buttonTwo.on('click', function() {
  const allMiddleBlocks = $('.middle-blocks .block');
  const firstBlock = allMiddleBlocks[0];
  const secondBlock = allMiddleBlocks[1];
  secondBlock.after(firstBlock);
})

$( document ).ready(function() {
  const modal = $('.modal');
  modal.css("display", "block")
  const modalButtons = $('.modal button');
  modalButtons.on('click', function() {
    modal.css("display", "none")
  })
});

