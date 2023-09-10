                                                    // ex-1
class Account{
    constructor({login, email}){
        this.login = login
        this.email = email
    }

    getInfo() {
        return `Login: ${this.login}, Email: ${this.email}`
    }
}
console.log(Account.prototype.getInfo); // function
const mango = new Account({
login: 'Mangozedog',
email: 'mango@dog.woof',
});
console.log(mango.getInfo())// Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
login: 'Poly',
email: 'poly@mail.com',
});
console.log(poly.getInfo()) // Login: Poly, Email: poly@mail.com    
                                                        // ex-2
class User {
    constructor({name, age, followers}) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        return `${this.name} is ${this.age} years old and has ${this.followers} followers`
    }
}
const oleg = new User({
    name: 'Oleg',
    age: 2,
    followers: 20,
    });
    console.log(oleg.getInfo()) // User Mango is 2 years old and has 20 followers
    const dany = new User({
    name: 'Dany',
    age: 3,
    followers: 17,
    });
    console.log(dany.getInfo()) // User Poly is 3 years old and has 17 followers
                                                    // ex-3
class Storage {
    constructor(item) {
        this.item = item
    }
    getItems(){
        return this.item
    }
    addItem(newItem) {
        this.item.push(newItem)
        console.log(this.item) 
        return this.item
    }
    removeItem(remItem) {
        const indexOfRem = this.item.indexOf(remItem)
        this.item.splice(indexOfRem, 1)
        console.log(this.item)
        return this.item
    }
}
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
    ]);
    const items = storage.getItems();
    console.log(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
    storage.addItem('Дроїд');
    console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
    storage.removeItem('Пролонгер');
    console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
                                                // ex-4
class StringBuilder {
    constructor(string) {
        this._value = string
    }

    getValue() {
        return this._value
    }

    append(str) {
        return this._value = this._value + str
    }

    prepend(str) {
        return this._value = str + this._value
    }

    pad(str) {
        return  this._value = str + this._value + str
    }
}

const builder = new StringBuilder('.');
builder.append('^');
console.log(builder._value); // '.^'
builder.prepend('^');
console.log(builder._value); // '^.^'
builder.pad('=');
console.log(builder._value); // '=^.^='
                                                            // ex-5
class Car {

#price;
static getSpecs({maxSpeed, speed, isOn, distance, price}) {
    console.log(`maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`)
}

constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
    this.speed = speed
    this.#price = price
    this.maxSpeed = maxSpeed
    this.isOn = isOn
    this.distance = distance
}

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  } 

turnOn() {
    this.isOn = true;
    return this.isOn
}

turnOff() {
    this.isOn = false;
    this.speed = 0;
    return this.isOn
}

accelerate(value) {
    if (value + this.speed < this.maxSpeed){
        return this.speed += value
     }
}

decelerate(value) {
    if(this.speed - value > 0){
        return this.speed -= value
     }
}

drive(hours) {
    if(this.isOn === true) {
        return this.distance += hours * this.speed
    }
}

}   
Car.getSpecs({ maxSpeed: 200, price: 2000, isOn: true, distance: 200, speed: 50})
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000