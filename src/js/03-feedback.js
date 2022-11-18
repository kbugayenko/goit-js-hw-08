import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';

updateFormField();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (!data.message || !data.email) return;
  console.log(data);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  updateFormField();
}

function onFormInput({ target: { name, value } }) {
  const store = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
  store[name] = value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(store));
}

function updateFormField() {
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  Object.entries(data || { email: '', message: '' }).forEach(
    ([name, value]) => {
      form.elements[name].value = value;
    }
  );
}
