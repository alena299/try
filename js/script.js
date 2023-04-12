console.log("hello");
let c = 9;
function count () {
  c++;
  console.log(c);
 
}
count();
document.querySelector(".out-1").addEventListener("mousemove", blockWidth);
let w = 100;

function blockWidth() {
  w++;
  document.querySelector(".out-1").style.width = w + "px";
}
// alert('hello');
// alert('hello'); 
// alert('hello');

function sumOfNumbers() {
    let x = 6;
    let y = 10;
    console.log(x * y);
    
}
sumOfNumbers();
console.info('hhh');

document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = 2020;
document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = '<b>123</b>';

document.querySelector('.header').innerHTML = 'more';
document.querySelector('#one').innerHTML = 777;
document.getElementById('one').innerHTML = 888;

let a = document.querySelector('#one');
a.innerHTML = 999;

let b = document.querySelector('.header');
b.innerHTML = 444;

function quarterOf(month) {
    return Math.ceil(month / 3)
}

let quarter = quarterOf(15);
console.log(quarter);
