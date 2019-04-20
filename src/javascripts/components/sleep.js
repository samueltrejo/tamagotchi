import util from '../helpers/util';

const energy = 50;

const printSection = () => {
  let domString = '';
  domString += '<div class="sleep-heading">';
  domString += '<div>Sleep</div>';
  domString += `<div>${energy}</div>`;
  domString += '</div>';
  domString += '<div class="sleep-buttons">';
  domString += '<button value="sleep">Healthy Food</button>';
  domString += '<button value="sleep">Junk Food</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
};

const sleepAction = () => {
  console.error(energy);
};

export default { printSection, sleepAction };
