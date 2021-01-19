let color = [
    "255, 240, 124",
    "128, 255, 114",
    "126, 232, 250",
    "238, 192, 198",
    "229, 140, 138"
];
const items = document.querySelectorAll('.item');

itemsArray = Array.from(items);

for (item of itemsArray) {
    console.log(item);
    item.style.background = `rgb(${color[Math.floor(Math.random()*(color.length-1))]})`;
}