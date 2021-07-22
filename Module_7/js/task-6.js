const inputRef =  document.querySelector('#validation-input');
const inputDataLength = inputRef.getAttribute('data-length');

const focusInput = () => {
    if (inputRef.value.length === Number(inputDataLength)) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }

    if (inputRef.value.length !== Number(inputDataLength)) {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
}

inputRef.addEventListener('blur', focusInput);