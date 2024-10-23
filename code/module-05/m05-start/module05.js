/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*  EXERCISE 1 */
var BuildArray = /** @class */ (function () {
    // TODO Define the constructor
    function BuildArray(items, sortOrder) {
        // TODO Define the methods
        this.sortDescending = function (a, b) {
            if (a > b) {
                return -1;
            }
            else if (b > a) {
                return 1;
            }
            else {
                return 0;
            }
        };
        this.sortAscending = function (a, b) {
            if (a > b) {
                return 1;
            }
            else if (b > a) {
                return -1;
            }
            else {
                return 0;
            }
        };
        this._items = items;
        this._sortOrder = sortOrder;
    }
    Object.defineProperty(BuildArray.prototype, "items", {
        // TODO Define the accessors
        get: function () {
            return this._items;
        },
        set: function (items) {
            this.items = items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildArray.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (sortOrder) {
            this._sortOrder = sortOrder;
        },
        enumerable: false,
        configurable: true
    });
    BuildArray.prototype.buildArray = function () {
        var randomNumbers = [];
        var nextNumber;
        for (var counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            }
            else {
                counter--;
            }
        }
        if (this.sortOrder === 'ascending') {
            return randomNumbers.sort(this.sortAscending);
        }
        else {
            return randomNumbers.sort(this.sortDescending);
        }
    };
    return BuildArray;
}());
/*  sortDescending is a comparison function that tells the sort method how to sort numbers
    in descending order. */
var sortDescending = function (a, b) {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
/*  sortAscending is a comparison function that tells the sort method how to sort numbers
    in ascending order. */
var sortAscending = function (a, b) {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
/*  buildArray builds an array of unique random numbers containing the number of items
    based on the number passed to it. The sortOrder parameter determines whether to sort
    the array in ascending or descending order. */
function buildArray(items, sortOrder) {
    var randomNumbers = [];
    var nextNumber;
    for (var counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
}
/*  TODO: Instantiate the BuildArray objects. */
var testArray1 = new BuildArray(12, 'ascending');
var testArray2 = new BuildArray(8, 'descending');
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
var Car = /** @class */ (function () {
    // constructor
    function Car(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Icrement the value of the static property
    }
    Object.defineProperty(Car.prototype, "make", {
        // accessors
        get: function () {
            return this._make;
        },
        set: function (make) {
            this._make = make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return 'The color of the car is ' + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            if ((doors % 2) === 0) {
                this._doors = doors;
            }
            else {
                throw new Error('Doors must be an even number');
            }
        },
        enumerable: false,
        configurable: true
    });
    // methods
    Car.prototype.accelerate = function (speed) {
        return "".concat(this.worker(), " is accelerating to ").concat(speed, " MPH.");
    };
    Car.prototype.brake = function () {
        return "".concat(this.worker(), " is braking with the standard braking system.");
    };
    Car.prototype.turn = function (direction) {
        return "".concat(this.worker(), " is turning ").concat(direction);
    };
    // This function performs work for the other method functions
    Car.prototype.worker = function () {
        return this._make;
    };
    Car.getNumberOfCars = function () {
        return Car.numberOfCars;
    };
    // properties
    Car.numberOfCars = 0; // New static property
    return Car;
}());
var myCar1 = new Car('Cool Car Company', 'blue', 2); // Instantiates the car object with all parameters
var myCar2 = new Car('Galaxy Motors', 'red', 2);
console.log(myCar1.color);
console.log(myCar1.accelerate(15));
console.log(Car.getNumberOfCars());
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    // constructor
    function ElectricCar(make, color, range, doors) {
        if (doors === void 0) { doors = 2; }
        var _this = _super.call(this, make, color, doors) || this;
        _this._range = range;
        return _this;
    }
    Object.defineProperty(ElectricCar.prototype, "range", {
        // accessors
        get: function () {
            return this._range;
        },
        set: function (range) {
            this._range = range;
        },
        enumerable: false,
        configurable: true
    });
    // methods
    ElectricCar.prototype.charge = function () {
        console.log(this.worker() + " is charging. ");
    };
    // overwritte the brake method of Car class
    ElectricCar.prototype.brake = function () {
        return "".concat(this.worker(), " is braking with the regenerative braking system.");
    };
    return ElectricCar;
}(Car));
var spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
var eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default value 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with regenerative braking system"
