const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const addName = () => {
    outputRef.textContent = inputRef.value;
    if (outputRef.textContent === '' ) {
        outputRef.textContent = 'незнайомець';
    }
}

inputRef.addEventListener('input', addName);