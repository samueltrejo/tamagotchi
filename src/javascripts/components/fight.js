import util from '../helpers/util';

import './styles/fight.scss';

let strength = 100;

const printSection = () => {
  let domString = '';
  domString += '<div class="fight-heading">';
  domString += '<div>Fight</div>';
  domString += `<div id="strength-bar">${strength}</div>`;
  domString += '</div>';
  domString += '<div class="fight-buttons">';
  domString += '<button name="fight" value="1">Run Away</button>';
  domString += '<button name="fight" value="-10">Commit Violence</button>';
  domString += '</div>';
  util.printToDom('fight', domString);
};

const fightAction = (subAction) => {
  strength += parseInt(subAction, 10);
  strength = util.simplify(strength);
  util.printToDom('strength-bar', strength);
};

export default { printSection, fightAction };
