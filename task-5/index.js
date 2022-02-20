export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let coppyReverseArray = arr.slice();
  coppyReverseArray.reverse();
  return coppyReverseArray;
}

export function withdraw(clients, balances, client, amount) {
  let res = 0;
  let anotherRes = -1;
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      res = balances[i] - amount;
    }
    if (clients[i] === client && balances[i] < amount) {
      return anotherRes;
    }
  }

  return res;
}

export const getAdults = obj => {
  let copy = Object.assign({}, obj);
  let res = {};
  for (let key in copy) {
    if (copy[key] < 18) {
      delete copy[key];
      res = copy;
    }
  }
  return res;
};
