import util from '../helpers/util';

let fun = 50;

const printSection = () => {
  let domString = '';
  domString += '<div class="play-heading">';
  domString += '<div>Play</div>';
  domString += `<div id="fun-bar">${fun}</div>`;
  domString += '</div>';
  domString += '<div class="play-buttons">';
  domString += '<button name="play" value="50">Fun Activity</button>';
  domString += '<button name="play" value="2">Lame Activity</button>';
  domString += '</div>';
  util.printToDom('play', domString);
};

const playAction = (subAction) => {
  fun += parseInt(subAction, 10);
  fun = util.simplify(fun);
  util.printToDom('fun-bar', fun);
};

export default { printSection, playAction };
