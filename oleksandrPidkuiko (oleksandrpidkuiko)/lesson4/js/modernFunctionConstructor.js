'use strict';

function ModernCar(brand, fuellTank, ownerFullName) {
    let firstName;
    let secondName;
    this.brand = brand;
    this.fuelTank = fuellTank;
    if(typeof (ownerFullName) === "string"){
        ownerFullName = ownerFullName.split(' ');
        if(ownerFullName.length === 2){
            firstName = ownerFullName[0];
            secondName = ownerFullName[1];
            this.ownerFullName = ownerFullName.join(' ');
        }else {
            this.ownerFullName = "John Doe";
            firstName = 'Jhon';
            secondName =  'Doe';
        }
    }else {
        this.ownerFullName = 'John Doe';
        firstName = 'Jhon';
        secondName =  'Doe';
    }
    this.getBrand = function(){
        return this.brand;
    };
    this.getFuelTank = function(){
        return this.fuelTank;
    };
    this.getOwnerFullName = function(){
        return this.ownerFullName;
    };
    this.getFirstNamePart = function () {
        return firstName;
    }
    this.getSecondNamePart = function () {
        return secondName;
    }
}
let myCar = new ModernCar('Mazda', 40, 'London is the capital of Great Britain');
