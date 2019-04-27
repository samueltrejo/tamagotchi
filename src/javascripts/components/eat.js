import util from '../helpers/util';
import health from './pet';

import './styles/eat.scss';

let full = 100;

const printSection = () => {
  let domString = '';
  domString += '<div class="eat-info">';
  domString += '<div class="eat-heading">';
  domString += '<h3>Food</h3>';
  domString += '</div>';
  domString += '<div class="eat-body">';
  domString += '<div>';
  domString += '<i class="material-icons">fastfood</i>';
  domString += `<div id="fullness-stat">${full}</div>`;
  domString += '</div>';
  domString += '<div class="eat-values">';
  domString += '<div class="eat-bar"><div id="fullness-bar" class="eat-progress"></div></div>';
  domString += '<div class="eat-buttons">';
  domString += '<button name="eat" value="10">Steak</button>';
  domString += '<button name="eat" value="-3">Candy</button>';
  domString += '</div></div></div>';
  domString += '<div class="eat-footer"></div>';
  domString += '</div>';
  util.printToDom('eat', domString);
  health.healthStat(0, full);
};

const eatAction = (subAction) => {
  full += util.randomStatValue(parseInt(subAction, 10));
  full = util.simplify(full);
  util.printToDom('fullness-stat', full);
  document.getElementById('fullness-bar').style.width = `${full}%`;
  health.healthStat(0, full);
  health.checkHealth();
};

export default { printSection, eatAction };
