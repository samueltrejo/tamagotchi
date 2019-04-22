import util from '../helpers/util';

import './styles/sleep.scss';

let energy = 50;

const printSection = () => {
  let domString = '';
  domString += '<div class="sleep-info">';
  domString += '<div class="sleep-heading">';
  domString += '<div>Sleep</div>';
  domString += `<div id="energy-bar">${energy}</div>`;
  domString += '</div>';
  domString += '<div class="sleep-buttons">';
  domString += '<button name="sleep" value="50">Nap</button>';
  domString += '<button name="sleep" value="60">Deep Sleep</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('sleep', domString);
};

const sleepAction = (subAction) => {
  energy += parseInt(subAction, 10);
  energy = util.simplify(energy);
  util.printToDom('energy-bar', energy);
};

export default { printSection, sleepAction };
