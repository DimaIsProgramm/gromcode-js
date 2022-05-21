const formElem = document.querySelector('.login-form');
const buttonSubmit = document.querySelector('.submit-button');
const emailInput = document.querySelector('[name="email"]');
const nameInput = document.querySelector('[name="name"]');
const passwordInput = document.querySelector('[name="password"]');

const onInputChange = () => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', true);
  }
};

formElem.addEventListener('input', onInputChange);

const serverUrl = 'https://628622c1f0e8f0bb7c10e9d2.mockapi.io/api/v1/users';

const createUserHandler = event => {
  event.preventDefault();

  const user = {
    email: emailInput.value,
    name: nameInput.value,
    password: passwordInput.value,
  };
  return fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      return response.json();
    })
    .then(body => {
      alert(JSON.stringify(body));
      return body;
    })
    .then(input => {
      formElem.reset(input);
    });
};

formElem.addEventListener('submit', createUserHandler);
