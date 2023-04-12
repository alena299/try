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
