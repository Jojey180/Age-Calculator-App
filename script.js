// Inputs
const dayInput = document.querySelector('.day');
const monthInput = document.querySelector('.month');
const yearInput = document.querySelector('.year');

// Outputs
const dayOutput = document.querySelector('#DD');
const monthOutput = document.querySelector('#MM');
const yearOutput = document.querySelector('#YY');

//Button
const button = document.querySelector('.btn');

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll('input');
    let validator = true;
    inputs.forEach ((input) => {
        const parent = input.parentElement;
        if (!input.value) {
            input.style.borderColor = 'red';
            parent.querySelector('small').innerText = 'This field is required.';
            validator = false;
        } else if (monthInput.value > 12) {
            monthInput.style.borderColor = 'red';
            monthInput.parentElement.querySelector('small').innerText = 'Must be a valid month.';
            validator = false;
        } else if (dayInput.value > 31) {
            dayInput.style.borderColor = 'red';
            dayInput.parentElement.querySelector('small').innerText = 'Must be a valid day.';
            validator = false;
        } else {
            input.style.borderColor = 'black';
            parent.querySelector('small').innerText = '';
            validator = true;
        }
    })
    return validator;
}

button.addEventListener('click', ((e) => {
    e.preventDefault;
    if (validate()) {
        if (dayInput.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthInput.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - dayInput.value;
        const m = month - monthInput.value;
        const y = year - yearInput.value;

        dayOutput.innerHTML = d;
        monthOutput.innerHTML = m;
        yearOutput.innerHTML = y;
    }
}));