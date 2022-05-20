const formElem = document.querySelector('.login-form');
const inputForm = document.querySelectorAll('.form-input');
const buttonSubmit = document.querySelector('.submit-button');

// inputForm.forEach(input => {
//   if (input.value !== '') {
//     buttonSubmit.disabled = false;
//   }
// });
// const inputEmpty = Array.from(inputForm).filter(input => input.value === '');
// if (inputEmpty.length === 0) {
//   buttonSubmit.disabled = false;
// }

const serverUrl = 'https://628622c1f0e8f0bb7c10e9d2.mockapi.io/api/v1/tasks';

const createUserHandler = event => {
  event.preventDefault();

  const user = {
    email: 'test@gmail.com',
    name: 'Dima',
    password: '123',
  };
  fetch(serverUrl, {
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
