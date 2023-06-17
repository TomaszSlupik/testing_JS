const add = require('../vanilla-tdd/spec/support/add');

const valueAInput = document.querySelector('#valueA');
const valueBInput = document.querySelector('#valueB');

const resultOutput = document.querySelector('#result');
const addButton = document.querySelector('#add');

addButton.addEventListener('click', () => {

  resultOutput.textContent = add(valueAInput.value, valueBInput.value)

});
