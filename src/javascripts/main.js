import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import setup from './helpers/button-events';
import pet from './components/pet';

import '../styles/main.scss';

const init = () => {
  pet.petDomString();
  eat.printSection();
  play.printSection();
  fight.printSection();
  sleep.printSection();
  setup.attachEvents();
};

init();

document.addEventListener('click', (event) => {
  console.error(event);
});
