export const getItemList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
};

export const getItemsArray = () => {
  const elements = document.querySelectorAll('.tool');
  const elementsArray = Array.from(elements);
  console.dir(elementsArray);
  return elementsArray;
};
