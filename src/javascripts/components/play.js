import util from '../helpers/util';

const fun = 50;

const printSection = () => {
  let domString = '';
  domString += '<div class="play-heading">';
  domString += '<div>Play</div>';
  domString += `<div>${fun}</div>`;
  domString += '</div>';
  domString += '<div class="play-buttons">';
  domString += '<button value="play">Healthy Food</button>';
  domString += '<button value="play">Junk Food</button>';
  domString += '</div>';
  util.printToDom('play', domString);
};

const playAction = () => {
  console.error(fun);
};

export default { printSection, playAction };
