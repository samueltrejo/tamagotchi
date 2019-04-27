import util from '../helpers/util';
import health from './pet';

import './styles/play.scss';

let fun = 50;

const printSection = () => {
  let domString = '';
  domString += '<div class="play-info">';
  domString += '<div class="play-heading">';
  domString += '<div>Play</div>';
  domString += `<div id="fun-stat">${fun}</div>`;
  domString += '<progress id="fun-bar" max="100" value="50"></progress>';
  domString += '</div>';
  domString += '<div class="play-buttons">';
  domString += '<button name="play" value="50">Catch</button>';
  domString += '<button name="play" value="2">Monopoly</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('play', domString);
  health.healthStat(1, fun);
};

const playAction = (subAction) => {
  fun += util.randomStatValue(parseInt(subAction, 10));
  fun = util.simplify(fun);
  util.printToDom('fun-stat', fun);
  document.getElementById('fun-bar').value = fun;
  health.healthStat(1, fun);
  health.checkHealth();
};

export default { printSection, playAction };
