export const getTitle = () => {
  const title = document.querySelector('.title');
  return title.textContent;
};

export const getDescription = () => {
  const descript = document.querySelector('.about');
  return descript.innerText;
};

export const getPlans = () => {
  const plans = document.querySelector('.plans');
  return plans.innerHTML;
};

export const getGoal = () => {
  const goal = document.querySelector('.goal');
  return goal.outerHTML;
};
