const ListOfCategories = document.querySelectorAll('.item');
console.log(`У списку є ${ListOfCategories.length} категорії`);

ListOfCategories.forEach((item) => {
    console.log(`Категорія: ${item.querySelector('.item > h2').textContent}`);
    console.log(`Кількість елементів: ${item.querySelectorAll('li').length}`);
});