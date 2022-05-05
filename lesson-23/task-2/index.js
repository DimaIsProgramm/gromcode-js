// input: click
// output: numbers in board

//algo

const seat = document.querySelectorAll('.sector__seat');
const line = document.querySelectorAll('.sector__line');
const sector = document.querySelectorAll('.sector');
const arena = document.querySelector('.arena');

const logBoard = () => {
  const myBoard = document.querySelector('.board__selected-seat');

  myBoard.innerHTML = `<span>S ${1} - L ${2} - S ${3}</span>`;
};
logBoard();

// const sectorNumber = event => {
//   console.log(event.target.dataset.sectorNumber);
// };

// const lineNumber = dataLine => {
//   console.log(`My line number is ${dataLine}`);
// };

// const seatNumber = event => {
//   console.log(event.target.dataset.seatNumber);
// };

// const bindLineNumber = lineNumber.bind(null, '4');

// arena.addEventListener('click', seatNumber);
// arena.addEventListener('click', event => {
//   if (event.target.closest('.sector__line')) {
//     bindLineNumber();
//   }
// });
// arena.addEventListener('click', sectorNumber);
// seat.forEach(seat => {
//   seat.addEventListener('click', seatNumber);
// });
// line.forEach(line => {
//   line.addEventListener('click', lineNumber);
//   console.log(line.dataset.lineNumber);
// });
// sector.forEach(sector => {
//   sector.addEventListener('click', sectorNumber, true);
// });

// lineNumber();
