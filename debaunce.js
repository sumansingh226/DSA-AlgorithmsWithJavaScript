let counter = 0;
const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Watermelon",
    "Pineapple",
    "Mango",
    "Kiwi",
    "Blueberry",
    "Peach",
    "Cherry",
    "Pear",
    "Lemon",
    "Raspberry",
    "Cantaloupe",
    "Plum",
    "Apricot",
    "Pomegranate",
    "Coconut",
];

const handleSearch = () => {
    let searchValue = document.getElementById("searchInput").value;
    const fruitList = fruits.filter((fruit) => fruit.includes(searchValue));
    console.log("fruitList", fruitList);
};
const doSomeMagic = function (fn, delay) {
    let timer;
    return function () {
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            handleSearch.apply(context, arguments);
            clearTimeout(timer);
        }, delay);
    };
};

const betterFunction = doSomeMagic(handleSearch, 1000);
