class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand2 = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }

  drive() {
    console.log(`${this.brand2} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand2} ${this.color} is reversing`);
  }

  turn() {
    console.log(`${this.brand2} ${this.color} is turning`);
  }
}

// Membuat objek mobil dengan constructor function Car
const car1 = new Car("Toyota", "Silver", 200, "to-1");
const car2 = new Car("Honda", "Black", 180, "ho-1");
const car3 = new Car("Suzuki", "Red", 220, "su-1");

console.log(car1);
console.log(car2);
console.log(car3);

car1.reverse();
car2.drive();
car3.drive();
