'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');

  const listItemElem = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const liItem = document.createElement('li');
      liItem.classList.add('list__item');
      if (done) {
        liItem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      liItem.append(checkboxElem, text);

      return liItem;
    });

  listElem.append(...listItemElem);
};

renderTasks(tasks);
