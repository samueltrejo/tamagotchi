import eat from '../components/eat';
import play from '../components/play';
import fight from '../components/fight';
import sleep from '../components/sleep';

const interaction = {
  default: '',
  eat: eat.eatAction,
  play: play.playAction,
  fight: fight.fightAction,
  sleep: sleep.sleepAction,
};

const petInteraction = (event) => {
  const action = event.target.name;
  const subAction = event.target.value;
  if (action !== undefined) {
    interaction[action](subAction);
  }
};

const attachEvents = () => {
  document.addEventListener('click', petInteraction);
};

export default { attachEvents };
