const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreenP = logTarget.bind(null, 'p', 'green');
const logGreenSpan = logTarget.bind(null, 'span', 'green');

const logGreyDiv = logTarget.bind(null, 'div', 'grey');
const logGreyP = logTarget.bind(null, 'p', 'grey');
const logGreySpan = logTarget.bind(null, 'span', 'grey');

divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);

divElem.addEventListener('click', logGreyDiv, true);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, true);

const buttonClear = document.querySelector('.clear-btn');
const inputField = document.querySelector('.events-list');

buttonClear.addEventListener('click', () => {
  inputField.innerHTML = '';
});

const buttonRemoveHandlers = document.querySelector('.remove-handlers-btn');

buttonRemoveHandlers.addEventListener('click', () => {
  divElem.removeEventListener('click', logGreenDiv);
});

buttonRemoveHandlers.addEventListener('click', () => {
  pElem.removeEventListener('click', logGreenP);
});

buttonRemoveHandlers.addEventListener('click', () => {
  spanElem.removeEventListener('click', logGreenSpan);
});

buttonRemoveHandlers.addEventListener('click', () => {
  divElem.removeEventListener('click', logGreyDiv, true);
});

buttonRemoveHandlers.addEventListener('click', () => {
  pElem.removeEventListener('click', logGreyP, true);
});

buttonRemoveHandlers.addEventListener('click', () => {
  spanElem.removeEventListener('click', logGreySpan, true);
});

const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

attachHandlersBtn.addEventListener('click', () => {
  divElem.addEventListener('click', logGreenDiv);
});

attachHandlersBtn.addEventListener('click', () => {
  pElem.addEventListener('click', logGreenP);
});

attachHandlersBtn.addEventListener('click', () => {
  spanElem.addEventListener('click', logGreenSpan);
});

attachHandlersBtn.addEventListener('click', () => {
  divElem.addEventListener('click', logGreyDiv, true);
});

attachHandlersBtn.addEventListener('click', () => {
  pElem.addEventListener('click', logGreyP, true);
});

attachHandlersBtn.addEventListener('click', () => {
  spanElem.addEventListener('click', logGreySpan, true);
});
