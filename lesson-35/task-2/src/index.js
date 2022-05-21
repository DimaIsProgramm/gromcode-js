const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const repoList = document.querySelector('.repo-list');

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const fetchUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`).then(response => response.json());
};

const renderUserData = userData => {
  const { avatar_url, name, location, repos_url } = userData;
  console.log(userData);
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';

  const liElem = document.createElement('li');
  liElem.classList.add('repo-list__item');
  const liElems = document.querySelectorAll('.repos-list__item');
  fetch(repos_url)
    .then(response => response.json())
    .then(item => item.map(elem => elem.name));
  
    liElems.forEach(item => item.value = )
  repoList.append(liElem);
};

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then(userData => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);
