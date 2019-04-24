import util from '../helpers/util';
import health from './pet';

import './styles/eat.scss';

let full = 100;

const printSection = () => {
  let domString = '';
  domString += '<div class="eat-info">';
  domString += '<div class="eat-heading">';
  domString += '<div>Eat</div>';
  domString += `<div id="fullness-stat">${full}</div>`;
  domString += '<progress id="fullness-bar" class="eat-progress" max="100" value="100"></progress>';
  domString += '</div>';
  domString += '<div class="eat-buttons">';
  domString += '<button name="eat" value="10">Healthy Food</button>';
  domString += '<button name="eat" value="-3">Junk Food</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('eat', domString);
  health.healthStat(0, full);
};

const eatAction = (subAction) => {
  full += parseInt(subAction, 10);
  full = util.simplify(full);
  util.printToDom('fullness-stat', full);
  document.getElementById('fullness-bar').value = full;
  health.healthStat(0, full);
  health.checkHealth();
};

export default { printSection, eatAction };
