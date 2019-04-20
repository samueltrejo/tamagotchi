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

export default { printToDom, simplify };
