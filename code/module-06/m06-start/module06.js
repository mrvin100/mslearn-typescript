/*  Module 6: DGenerics in TypeScript
    Lab Start */
/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
var DataStore = /** @class */ (function () {
    function DataStore() {
        this._data = new Array(10);
    }
    DataStore.prototype.AddOrUpdate = function (index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
        else {
            console.log('Index is greater than 10');
        }
    };
    DataStore.prototype.GetData = function (index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    };
    return DataStore;
}());
var cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'
// TODO Test items as numbers.
var empIDS = new DataStore();
empIDS.AddOrUpdate(0, 50);
empIDS.AddOrUpdate(1, 65);
empIDS.AddOrUpdate(2, 89);
console.log(empIDS.GetData(0));
var pets = new DataStore();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5 });
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russel Terrier', age: 3 });
console.log(pets.GetData(1));
