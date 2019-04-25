import util from '../helpers/util';
import health from './pet';

import './styles/fight.scss';

let strength = 100;

const printSection = () => {
  let domString = '';
  domString += '<div class="fight-info">';
  domString += '<div class="fight-heading">';
  domString += '<div>Fight</div>';
  domString += `<div id="strength-stat">${strength}</div>`;
  domString += '<progress id="strength-bar" max="100" value="100"></progress>';
  domString += '</div>';
  domString += '<div class="fight-buttons">';
  domString += '<button name="fight" value="1">Flee</button>';
  domString += '<button name="fight" value="-10">Violence</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('fight', domString);
  health.healthStat(2, strength);
};

const fightAction = (subAction) => {
  strength += util.randomStatValue(parseInt(subAction, 10));
  strength = util.simplify(strength);
  util.printToDom('strength-stat', strength);
  document.getElementById('strength-bar').value = strength;
  health.healthStat(2, strength);
  health.checkHealth();
};

export default { printSection, fightAction };
