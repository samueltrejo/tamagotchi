import util from '../helpers/util';
import health from './pet';

import './styles/sleep.scss';

let energy = 50;

const printSection = () => {
  let domString = '';
  domString += '<div class="sleep-info">';
  domString += '<div class="sleep-heading">';
  domString += '<div>Sleep</div>';
  domString += `<div id="energy-stat">${energy}</div>`;
  domString += '<progress id="energy-bar" max="100" value="50"></progress>';
  domString += '</div>';
  domString += '<div class="sleep-buttons">';
  domString += '<button name="sleep" value="50">Nap</button>';
  domString += '<button name="sleep" value="60">Deep Sleep</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  health.healthStat(3, energy);
};

const sleepAction = (subAction) => {
  energy += parseInt(subAction, 10);
  energy = util.simplify(energy);
  util.printToDom('energy-stat', energy);
  document.getElementById('energy-bar').value = energy;
  health.healthStat(3, energy);
  health.checkHealth();
};

export default { printSection, sleepAction };
