const formElem = document.querySelector('.login-form');
const buttonSubmit = document.querySelector('.submit-button');

const onInputChange = () => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', true);
  }
};

formElem.addEventListener('input', onInputChange);

const serverUrl = 'https://628622c1f0e8f0bb7c10e9d2.mockapi.io/api/v1/tasks';

const createUserHandler = event => {
  event.preventDefault();

  const user = {
    email: 'test@gmail.com',
    name: 'Dima',
    password: '123',
  };
  return fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(body => {
      alert(JSON.stringify(body));
    });
};

formElem.addEventListener('submit', createUserHandler);
