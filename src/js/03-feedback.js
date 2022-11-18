import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.js-input');
const message = document.querySelector('.js-message');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
let storageValue = {};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

if (!localStorage.getItem(LOCALSTORAGE_KEY)) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storageValue));
}

if (load(LOCALSTORAGE_KEY).email) {
  input.value = load(LOCALSTORAGE_KEY).email;
}
if (load(LOCALSTORAGE_KEY).message) {
  message.value = load(LOCALSTORAGE_KEY).message;
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log('Відправлення форми');

  const obj = {
    email: input.value,
    message: message.value,
  };
  console.log('Obj: ', obj);

  input.value = '';
  message.value = '';
  storageValue = {};
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormInput(e) {
  storageValue[e.target.name] = e.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storageValue));
}
