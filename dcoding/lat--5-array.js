const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.push("JavaScript");
console.log(myArray);
myArray.pop();
console.log("\nsetelah pop diesekusi\n" + myArray);
myArray.unshift("Apple");
console.log("\nsetelah unshift diesekusi\n" + myArray);
myArray.shift();
console.log("\nsetelah shift diesekusi\n" + myArray);

//Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.
// Untuk menghapus elemen, gunakan metode splice() seperti ini:M
myArray.splice(2, 1); //Menghapus dari index 2 sebanyak 1 elemen
console.log("\nsetelah delete index 0\n" + myArray);

console.log(...myArray);
console.log("=====================================");
// ARRAY SPREAD OPERATOR
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);
console.log("panjangnya jadi " + allFavorites.length);
