console.log("hey");

let cars = [
  "assets/images/car1.jpeg",
  "assets/images/car2.jpeg",
  "assets/images/car3.jpeg",
  "assets/images/car4.jpeg",
  "assets/images/car5.jpeg",
];

const index = parseInt(Math.random() * cars.length);

let count = 0;

document.getElementById("left").onclick = function () {
  count--;
  if (count < 0) {
    count = cars.length - 1;
  }
  document.getElementById(
    "backgroundContainer"
  ).style.backgroundImage = `url(${cars[count]})`;
};

document.getElementById("right").onclick = function () {
  count++;
  if (count > cars.length - 1) {
    count = 1;
  }
  document.getElementById(
    "backgroundContainer"
  ).style.backgroundImage = `url(${cars[count]})`;
};
