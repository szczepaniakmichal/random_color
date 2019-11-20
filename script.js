const random = () => {
    return Math.floor(Math.random() * 256);
};

const red = random();
const green = random();
const blue = random();
const color = `rgb(${red}, ${green}, ${blue})`;

const p = document.createElement('p');
p.textContent = 'START';
p.style.color = color;
document.body.appendChild(p);