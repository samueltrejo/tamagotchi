import util from '../helpers/util';

const strength = 100;

const printSection = () => {
  let domString = '';
  domString += '<div class="fight-heading">';
  domString += '<div>Fight</div>';
  domString += `<div>${strength}</div>`;
  domString += '</div>';
  domString += '<div class="fight-buttons">';
  domString += '<button value="fight">Healthy Food</button>';
  domString += '<button value="fight">Junk Food</button>';
  domString += '</div>';
  util.printToDom('fight', domString);
};

const fightAction = () => {
  console.error(strength);
};

export default { printSection, fightAction };
