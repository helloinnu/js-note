class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("John", "Doe");
console.log(user);
console.log(user.fullName);

user.fullName = "Fulan Antoni";
console.log(user);
console.log(user.fullName);

// Catatan penting yang perlu Anda ketahui mengenai getter setter adalah:

// method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti;
// method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator.

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`; //underscore bersifat private
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }
}
console.log("===================================");

const car = new Car("BMW", "red", 200);
console.log(car.chassisNumber);
car.chassisNumber = "BMW-1000";
console.log(car.chassisNumber);

/* Output:
BMW-232
you are not allowed to change the chassis number
BMW-232
*/
