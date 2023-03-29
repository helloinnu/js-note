class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

const car = new Car("BMW", "red", 200);

// console.log(car._chassisNumber);
car._chassisNumber = "BMW-1";
console.log(car._chassisNumber);
console.log(car._generateChassisNumber());

/*
kita sudah mengenal bahwa pemberian tanda underscore pada properti atau method bisa dijadikan sebagai penanda bahwa ia dianggap private. 
Masalahnya adalah cara tersebut tidak benar-benar memproteksi hak aksesnya. Contoh, pada class Car, kita sudah membuat properti _chassisNumber dan method _generateChassisNumber() 
dengan tanda underscore. Namun, kedua member tersebut tetap saja masih bisa di akses via instance, bahkan kita bisa mengubah nilainya.
*/
