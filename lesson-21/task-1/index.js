// const getTitleElement = titleElem => {
//   const myElem = document.querySelector('.title');
//   console.dir(myElem);
//   return myElem;
// };

// const getInputElement = inputElem => {
//   const myInput = document.querySelector('input' 'type[text]');
//   console.dir(myInput);
//   return myInput;
// };

// const setTitle = text =>  document.querySelector('.title').textContent;

// const setTitle = text => {
//   (document.querySelector('.title').textContent = text);

//   return findElem;
// };
// setTitle('Dimas');
// const createButton = buttonText => {
//   const elemBody = document.querySelector('body');
//   const myButton = document.createElement('button');
//   myButton.textContent = buttonText;
//   elemBody.append(myButton);
// };

// createButton('Hello there');

// const finishList = listElement => {
//   const ulElem = document.querySelector('.list');
//   const firstElem = document.createElement('li');
//   firstElem.textContent = '1';
//   ulElem.prepend(firstElem);

//   const specialElem = document.querySelector('.special');
//   const fourthElem = document.createElement('li');
//   fourthElem.textContent = '4';
//   specialElem.before(fourthElem);

//   const sixElem = document.createElement('li');
//   sixElem.textContent = '6';
//   specialElem.after(sixElem);

//   const eightsElem = document.createElement('li');
//   eightsElem.textContent = '8';
//   ulElem.append(eightsElem);
// };

// finishList();

// const finishForm = text => {
//   const inp = document.createElement('input');
//   inp.setAttribute('type', 'text');
//   inp.textContent = 'name';
// };

// finishForm('Dima');
// const manageClasses = () => {
//   const elOne = document.querySelector('.one');
//   elOne.classList.add('selected');

//   const elTwo = document.querySelector('.two');
//   elTwo.classList.remove('selected');

//   const elThree = document.querySelector('.three');
//   elThree.classList.toggle('three_done');

//   const elFour = document.querySelector('.four');
//   if (elFour.classList.contains('some-class')) {
//     elFour.classList.add('another-class');
//   }
// };
// manageClasses();

// const squaredNumbers = () => {
//   const myNumber = document.querySelectorAll('.number');
//   console.log(myNumber);
//   const currentNumber = myNumber.map(el => el.dataset.number);
//   console.log(currentNumber);
//   myNumber.dataset.squareNumber = currentNumber * currentNumber;
// };

// squaredNumbers();

// const getSection = num => {
//   const mySpan = document.querySelector(`span[data-number = '${num}']`);
//   console.log(mySpan);
//   const box = document.querySelector('.box');
//   return box.getAttribute('data-section');
// };
// getSection(2);

const finishForm = () => {
  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'text', 'name');
  inputElem.name = 'loggin';

  const myInput = document.querySelector('input');
  myInput.setAttribute('type', 'password');

  myInput.before(inputElem);
};

finishForm();
