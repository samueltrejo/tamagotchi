const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const simplify = (value) => {
  let simplifiedValue = value;
  if (simplifiedValue > 100) {
    simplifiedValue = 100;
  }

  if (simplifiedValue < 0) {
    simplifiedValue = 0;
  }
  return simplifiedValue;
};

const randomStatValue = (d) => {
  const a = d - 3;
  const b = d - 2;
  const c = d - 1;
  const e = d + 1;
  const f = d + 2;
  const g = d + 3;
  const values = [a, a, a, b, b, b, c, c, d, d, e, e, f, g];
  const randomValue = values[Math.floor((Math.random() * values.length))];
  console.error(randomValue);
  return randomValue;
};

export default { printToDom, simplify, randomStatValue };
