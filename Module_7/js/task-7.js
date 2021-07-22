const inputRangeRef = document.querySelector('#font-size-control');
const textEdit = document.querySelector('#text');

const sizeRange = () => {
    textEdit.style.fontSize = `${inputRangeRef.value/3}px`;
}

inputRangeRef.addEventListener('input', sizeRange);