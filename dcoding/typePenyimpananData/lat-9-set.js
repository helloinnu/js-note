// Set sederhananya merupakan kumpulan nilai (set of values).
// Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks.
// Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi. Perhatikan contoh deklarasi Set di bawah ini:

const numberSet = new Set(["innu", 4, 6, 4, 1]);

// Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri.
// Nilai yang duplikat akan diabaikan.

numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

// Ingat bahwa Set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.

numberSet.delete("innu");

console.log(numberSet);
