localStorage.setItem('name', JSON.stringify('Dima'));
localStorage.setItem('age', JSON.stringify(17));
localStorage.setItem('hobbies', JSON.stringify({ actions: 'footbal' }));

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getLocalStorageData());
