// FOR

for (a = 1; a < 11; a++) {
  console.log(`${a} ini adalah lop ` + a);
}

// FOR OF LOOP

let listNama = ["Luke", "Han", "Chewbacca", "Leia", "innu"];

for (const nama of listNama) {
  console.log(nama);
}

// While
// while lebih cocok digunakan pada kasus di mana kita tidak tahu pasti berapa banyak looping

let i = 1;

while (i <= 100) {
  console.log(i);
  i += 13;
}

// do-while
// Kondisi pada while akan dievaluasi sebelum blok kode di dalamnya dijalankan,
// sedangkan do-while akan mengevaluasi boolean expression setelah blok kodenya berjalan.
// Ini artinya kode di dalam do-while akan dijalankan setidaknya satu kali.

console.log("=========================");

// let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 115);
