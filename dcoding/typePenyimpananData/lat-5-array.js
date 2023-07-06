const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.push("JavaScript");
console.log(myArray[2]);
myArray.pop();
console.log("\nsetelah pop diesekusi\n" + myArray);
myArray.unshift("Apple");
console.log("\nsetelah unshift diesekusi\n" + myArray);
myArray.shift();
console.log("\nsetelah shift diesekusi\n" + myArray);

//Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.
// Untuk menghapus elemen, gunakan metode splice() seperti ini:
// splice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2)
myArray.splice(2, 1); //Menghapus mulai index 2 sebanyak 1 elemen
console.log("\nsetelah delete index 0\n" + myArray);

console.log(...myArray);
console.log("=====================================");
// ARRAY SPREAD OPERATOR
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);
console.log("panjangnya jadi " + allFavorites.length);

console.log("=====================================");
//looping for of
for (const food of allFavorites) {
  console.log(food);
}

console.log("=====================================");
myArray.forEach((arry) => {
  console.log(arry);
});

console.log("+++++++++++++++++++++++++++++++++++++++");
/* Method pada array

  length = mengembalikan panjang array
  join = menggabungkan isi array menjadi string
  push, pop, shift, unshift
*/

let arr = ["Ifanu", "Farid", "Opi", "Fikri"];

// push , menambah element array diakhir, bisa menambah beberapa element sekaligus

arr.push("Haikal", "Irwanda");

//pop, menghapus element terakhir array, harus satu per satu
arr.pop();

console.log(arr.join("="));

//unshift = push, namun pada awal element
//shift = pop

//slice, mengambil beberapa potong element array tanpa menghapus array lama
//slice(indexAwal, indexAkhir)
let arr2 = arr.slice(1, 3);

console.log(arr);
console.log(arr2);

console.log("-------------------------------------");
// melakukan statement setiap element array
arr.forEach(function (e) {
  console.log(e);
});

//mengmbalikan array
const arr3 = arr2.map(function (e) {
  return e;
});
console.log(arr3);

// filter, find
const arr4 = arr2.filter(function (e) {
  return e === "Opi";
});
console.log(arr4);
