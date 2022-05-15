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
}

export { doThingsIndex }

