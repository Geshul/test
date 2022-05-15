function doThingsForm () {
  $("form").submit(function( event ) {
  event.preventDefault();
  let result = {}
  $("form").serializeArray().map((el) => {
  result[el.name] = el.value;
});
  const formData = JSON.stringify(result);
  $('.page__form-screen').text(formData);
  sendData(formData);
});
}

const sendData = (data) => {
  fetch(
    '/data.json?' + new URLSearchParams(data),
    {
      method: 'GET',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert('Данные не отправлены');
      }
    })

    .then((response) => {
      alert(response.message);
    })

    .catch(() => {
      alert('Данные не отправлены');
    });
};

export { doThingsForm};
