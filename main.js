const colors = ["#23a7bb", "#e52929", "#29e52f", "#4b1751", "#efe81c","#df09b4", "#f4ad21"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const backGraound = document.getElementById('backGraound');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    backGraound.style.color = colors[randomNumber];
    color.textContent = colors[randomNumber];
    btn.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
