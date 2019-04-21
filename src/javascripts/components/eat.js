import util from '../helpers/util';

import './styles/eat.scss';

let full = 100;

const printSection = () => {
  let domString = '';
  domString += '<div class="eat-heading">';
  domString += '<div>Eat</div>';
  domString += `<div id="fullness-bar">${full}</div>`;
  domString += '</div>';
  domString += '<div class="eat-buttons">';
  domString += '<button name="eat" value="10">Healthy Food</button>';
  domString += '<button name="eat" value="-3">Junk Food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
};

const eatAction = (subAction) => {
  full += parseInt(subAction, 10);
  full = util.simplify(full);
  util.printToDom('fullness-bar', full);
};

export default { printSection, eatAction };
