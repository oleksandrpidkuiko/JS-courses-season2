'use strict';

function Car(brand, fuellTank, ownerFullName) {
    this.brand = brand;
    this.fuelTank = fuellTank;
    this.ownerFullName = ownerFullName;
    this.getBrand = function() {
        return this.brand;
    };
    this.getFuelTank = function() {
        return this.fuelTank;
    };
    this.getOwnerFullName = function() {
        return this.ownerFullName;
    };
}
let car = new Car('mitsubishi', 60, 'Pidkuiko Oleksandr');