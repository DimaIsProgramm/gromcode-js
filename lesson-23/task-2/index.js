// input: click
// output: numbers in board

// const seat = document.querySelectorAll('.sector__seat');
// const line = document.querySelectorAll('.sector__line');
// const sector = document.querySelectorAll('.sector');
// const arena = document.querySelector('.arena');

// const logBoard = () => {
//   const myBoard = document.querySelector('.board__selected-seat');

//   myBoard.innerHTML = `<span>S ${1} - L ${2} - S ${3}</span>`;
// };
// logBoard();

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
const generateNumbersRange = (from, to) => {
  const result = [];

  for (let index = from; index <= to; index++) {
    result.push(index);
  }
  return result;
};

const getLineSeats = () =>
  generateNumbersRange(1, 10)
    .map(
      lineNumber => `
    <div class="sector__seat" 
       data-seat-number="${lineNumber}"
    ></div>
    `,
    )
    .join('');

const getSectorLines = () => {
  const seatsString = getLineSeats();
  return generateNumbersRange(1, 10)
    .map(
      lineNumber => ` 
    <div
       class="sector__line" 
       data-line-number="${lineNumber}"
    >${seatsString}</div>
    `,
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const linesString = getSectorLines();
  const sectorsString = generateNumbersRange(1, 3)
    .map(
      sectorNumber => `
    <div
       class="sector" 
       data-sector-number="${sectorNumber}"
    >${linesString}</div>
    `,
    )
    .join('');

  arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }
  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');

  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
