
let cars = [];

cars.push("Toyota", "Honda", "Ford");
console.log(cars);

cars.unshift("BMW", "Mercedes-Benz", "Tesla");
console.log(cars);

cars.splice(2, 2);
console.log(cars);

cars.pop();
console.log(cars);

cars.shift();
console.log(cars);

cars.reverse();
console.log(cars);

cars.sort();
console.log(cars);

let carsSlice = cars.slice(2).concat(cars.slice(4));
console.log(carsSlice);

let indexOfTesla = cars.indexOf("Tesla");
console.log(indexOfTesla);
