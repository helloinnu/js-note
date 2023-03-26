// function declaration
function sayHello(greet) {
  console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
  console.log(`Nama saya ${name}`);
};

// ============================================

function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result);
console.log("===========================");

//  Expression Function

const greeting = function (name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
};

console.log(greeting("Ron", "English"));
