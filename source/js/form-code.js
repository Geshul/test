const mainForm = $("form");
const formDisplay = $('.page__form-screen');

function doThingsForm () {
  mainForm.submit((event) => {
  event.preventDefault();
  let result = {}
  mainForm.serializeArray().map((el) => {
  result[el.name] = el.value;
});
  const formData = JSON.stringify(result);
  formDisplay.text(formData);
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

doThingsForm();
