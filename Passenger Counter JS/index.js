let countEl = document.getElementById("count-el");
//for increment in counter
let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}
increment();
// for decrement in counter
let decCount = count;

function decrement() {
  decCount = count--;
  countEl.innerText = decCount;
}
decrement();

// for saving counter info

function save() {
  console.log(count);
}
save();
 