const decrementRef = document.querySelector('button[data-action = "decrement"]');
const incrementRef = document.querySelector('button[data-action = "increment"]');
let counterValueRef = document.querySelector('#value');

const decrement = () => {
    counterValueRef.textContent = Number(counterValueRef.textContent) - 1;
}


const increment = () => {
    counterValueRef.textContent = Number(counterValueRef.textContent) + 1;
}

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);