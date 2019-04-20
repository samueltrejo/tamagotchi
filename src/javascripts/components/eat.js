import util from '../helpers/util';

const full = 100;

const printSection = () => {
  let domString = '';
  domString += '<div class="eat-heading">';
  domString += '<div>Eat</div>';
  domString += `<div>${full}</div>`;
  domString += '</div>';
  domString += '<div class="eat-buttons">';
  domString += '<button value="eat">Healthy Food</button>';
  domString += '<button value="eat">Junk Food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
};

const eatAction = () => {
  console.error(full);
};

export default { printSection, eatAction };
