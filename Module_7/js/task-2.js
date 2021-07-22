const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

const ListOfIngredients = document.querySelector('#ingredients');
ingredients.forEach((ingredient) => {
    const unit = document.createElement('li');
    unit.textContent = ingredient;
    ListOfIngredients.appendChild(unit);
});