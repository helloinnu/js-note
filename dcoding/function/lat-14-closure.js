function init() {
  const name = "Obi Wan"; // Variabel lokal di dalam scope fungsi init

  function greet() {
    // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
  }
  console.log(`my name is ${name} \n`);
  // greet();
}
// greet(); //tidak bisa diakses karena diluar

init();
