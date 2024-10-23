/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1 */

class BuildArray {
    // TODO Define the properties
    private _items: number
    private _sortOrder: 'ascending'|'descending'

    // TODO Define the constructor
    constructor (items: number, sortOrder: 'ascending'|'descending'){
        this._items = items
        this._sortOrder = sortOrder
    }
    // TODO Define the accessors
    get items(){
        return this._items
    }
    set items(items){
        this.items = items
    }
    get sortOrder(){
        return this._sortOrder
    }
    set sortOrder(sortOrder){
        this._sortOrder = sortOrder
    }
    // TODO Define the methods
    private sortDescending = (a: number, b: number) => {
        if (a > b) {
            return -1;
        } else if (b > a) {
            return 1;
        } else {
            return 0; }
    }
    private sortAscending = (a: number, b: number) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    }

    buildArray(): number[] {
        let randomNumbers: number[] = [];
        let nextNumber: number;
        for (let counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            } else {
                counter--;
            }
        }
        if (this.sortOrder === 'ascending') {
            return randomNumbers.sort(this.sortAscending);
        } else {
            return randomNumbers.sort(this.sortDescending);
        }
    }
}

/*  sortDescending is a comparison function that tells the sort method how to sort numbers
    in descending order. */
let sortDescending = (a: number, b: number) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0; }
}

/*  sortAscending is a comparison function that tells the sort method how to sort numbers 
    in ascending order. */
let sortAscending = (a: number, b: number) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

/*  buildArray builds an array of unique random numbers containing the number of items 
    based on the number passed to it. The sortOrder parameter determines whether to sort 
    the array in ascending or descending order. */
function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        } else {
            counter--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    } else {
        return randomNumbers.sort(sortDescending);
    }
}

/*  TODO: Instantiate the BuildArray objects. */

let testArray1 = new BuildArray(12, 'ascending')
let testArray2 = new BuildArray(8, 'descending')

console.log(testArray1.buildArray());
console.log(testArray2.buildArray());



// Course tutorials

interface Vehicle{
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number):string
    brake(): string
    turn(direction: 'left' | 'right'): string
}

class Car implements Vehicle {
    // properties
    private static numberOfCars: number = 0; // New static property
    private _make: string;
    private _color: string;
    private _doors: number;
    // constructor
    constructor (make: string, color: string, doors = 4){
        this._make = make
        this._color = color
        this._doors = doors
        Car.numberOfCars++ // Icrement the value of the static property
    }
    // accessors
    get make(){
        return this._make
    }
    set make(make){
        this._make = make
    }
    get color(){
        return 'The color of the car is ' + this._color
    }
    set color(color){
        this._color = color
    }
    get doors(){
        return this._doors
    }
    set doors(doors){
        if((doors % 2) === 0){
            this._doors = doors
        }else{
            throw new Error('Doors must be an even number')
        }
    }
    // methods
    accelerate(speed: number){
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake():string{
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left'|'right'):string{
        return `${this.worker()} is turning ${direction}`
    }
    // This function performs work for the other method functions
    protected worker(){
        return this._make
    }
    public static getNumberOfCars(): number{
        return Car.numberOfCars
    }
}

let myCar1 = new Car('Cool Car Company', 'blue', 2) // Instantiates the car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'red', 2)

console.log(myCar1.color)
console.log(myCar1.accelerate(15))
console.log(Car.getNumberOfCars())

class ElectricCar extends Car{
    // properties
    private _range: number
    // constructor
    constructor (make: string, color: string, range: number, doors = 2){
        super(make, color, doors)
        this._range = range
    }
    // accessors
    get range(){
        return this._range
    }
    set range(range){
        this._range = range
    }
    // methods
    charge(){
        console.log(this.worker() + " is charging. ")
    }
    // overwritte the brake method of Car class
    brake(): string {
        return `${this.worker()} is braking with the regenerative braking system.`
    }
}

let spark = new ElectricCar('Spark Motors', 'silver', 124, 2)
let eCar = new ElectricCar('Electric Car Co.', 'black', 263)
console.log(eCar.doors); // returns the default value 2
spark.charge() // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with regenerative braking system"