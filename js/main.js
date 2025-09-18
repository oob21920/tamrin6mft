
let n = parseInt(prompt("تعداد عناصر آرایه را وارد کنید:"));

let arr = [];


for (let i = 0; i < n; i++) {
  let value = prompt("عنصر شماره " + (i + 1) + " را وارد کنید:");
  arr.push(value);
}


let searchValue = prompt("یک مقدار برای جستجو وارد کنید:");


let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === searchValue) {
    found = true;
    break; 
  }
}


if (found) {
  console.log(searchValue + " در آرایه وجود دارد ✅");
} else {
  console.log(searchValue + " در آرایه وجود ندارد ❌");
}
