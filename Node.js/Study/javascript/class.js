function User(name) {
    this._name = name;
}

User.prototype = Object.create(null, {
    constructor: {
        value: User
    },

    say: {
        value: function () {
            return 'My name is ' + this._name;
        }
    }
});

// var object = {}; // == var object = new Object();

var user = new User('Park');
console.log(user.say());


function Person() {}

Person.prototype.eyes = 2;
Person.prototype.nose = 1;

var park = new Person();
var kim = new Person();

Person.prototype.head = 3;

console.log(park.nose);

console.log(park.head);

