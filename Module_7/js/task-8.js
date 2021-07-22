const inputNumber = document.querySelector('input[type = "number"]');
const buttonDestroy = document.querySelector('button[data-action = "destroy"]');
const buttonCreate = document.querySelector('button[data-action = "render"]');
const boxRef = document.querySelector("#boxes");
let box;

const addBox = () => {
  for (let i = 0; i < getCount(); i += 1) {
    box = document.createElement("div");
    box.classList.add("boxContainer");
    box.style.height = `${30 + i * 10}px`;
    box.style.width = `${30 + i * 10}px`;
    box.style.backgroundColor = `rgba(${Math.round(
      Math.random() * (255 - 1) + 1
    )}, ${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(
      Math.random() * (255 - 1) + 1
    )}, ${Math.round(Math.random() * (10 - 1) + 1)}`;
    boxRef.appendChild(box);
  }
};

const deleteBox = () => {
  [...boxRef.children].forEach((child) => child.remove());
};

const getCount = () => {
  return inputNumber.value;
};

buttonCreate.addEventListener("click", addBox);
buttonDestroy.addEventListener("click", deleteBox);
inputNumber.addEventListener("input", getCount);
