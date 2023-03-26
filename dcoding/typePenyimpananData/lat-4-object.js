const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine",
};

// console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
// console.log(`Umur saya ${user.age} tahun`);
// console.log(`Saya berasal dari ${user["home world"]}`);

user.age = 20;
user.firstName = "Ifanu";
//akan ditambahkan

delete user.sex;
// user = {
//   firstName: "new Luke",
// };
console.log(user);

console.log("=====================================");

const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 }; //menggabungkan 2 object

console.log(newObj);
