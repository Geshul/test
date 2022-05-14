function doThingsForm () {
  $("form").submit(function( event ) {
  let result = {}
  $("form").serializeArray().map((el) => {
  result[el.name] = el.value;
});
  $('.page__form-screen').text(JSON.stringify(result));
  event.preventDefault();
  sendData();
});
}

const sendData = () => {
  fetch(
    'index.html',
    {
      method: 'GET',
    },
  )
    .then((response) => {
      if (response.ok) {
        alert('Данные успешно отправлены');
      } else {
        alert('Данные не отправлены');
      }
    })
    .catch(() => {
      alert('Данные не отправлены');
    });
};


export { doThingsForm};
