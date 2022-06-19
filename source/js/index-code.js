const titleBlock = $('.upper-block .block');
const buttonOne = $('.btn-warning');
const buttonTwo = $('.btn-success');
const modal = $('.modal');
const modalButtons = $('.modal button');
const middleBlock =$('.block--dashed');
const leftBlock = $('.block--moved')
let isSorted = false;

$(document).ready(() => {
  modal.show();
  modalButtons.on('click', () => {
    modal.hide();
  })
});

function doThingsIndex() {
  buttonOne.on('click', () => {
  titleBlock.toggleClass('block--opened');
  titleBlock.toggleClass('block--closed');
})};

buttonTwo.on('click', () => {
  if (isSorted === false) {
  middleBlock.css({
    "order": "-1",
  });
  isSorted = true;
} else {
  middleBlock.css({
    "order": "0",
  });
  isSorted = false;
}
});

doThingsIndex();
