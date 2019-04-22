import util from '../helpers/util';

import './styles/pet.scss';

const petDomString = () => {
  let domString = '';
  domString += '<div class="pet-container">';
  domString += '<img src="../../../assets/pet.gif">';
  domString += '</div>';
  util.printToDom('pet', domString);
};

export default { petDomString };
