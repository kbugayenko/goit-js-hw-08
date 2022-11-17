import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

if (!localStorage.getItem(LOCALSTORAGE_KEY)) {
  localStorage.setItem(LOCALSTORAGE_KEY, 0);
}

player
  .setCurrentTime(load(LOCALSTORAGE_KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

player.on('timeupdate', throttle(timeOnNow, 1000));

function timeOnNow(e) {
  localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
}
