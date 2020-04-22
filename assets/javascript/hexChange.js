
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['#862a5c','#43d8c9','#f2a365','#f4e04d','#856c8b','#d8345f','#8566aa'];
let hex = document.querySelector('hexColor');


body.style.backgroundColor = 'springgreen';
button.addEventListener('click', changeBackground);

function changeBackground(){

    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
    document.getElementById('hexColor').innerHTML = colors[colorIndex];
}


