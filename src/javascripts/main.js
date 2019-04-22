import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import setup from './helpers/button-events';
import pet from './components/pet';

import '../styles/main.scss';

const init = () => {
  eat.printSection();
  play.printSection();
  fight.printSection();
  sleep.printSection();
  setup.attachEvents();
  pet.petDomString();
};

init();
