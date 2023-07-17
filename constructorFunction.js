function displayDetails (ownerName){
    console.log(ownerName + ", this is your vehicle: " + this.registrationNumber + " " + this.brand);
}

function Car(regNo,brand){
    this.registrationNumber = regNo;
    this.brand = brand;
}

function Truck(regNo,brand){
    this.registrationNumber = regNo;
    this.brand = brand;
}

const cars = new Car("GA12345","Toyota");
const truck = new Truck("BR3848","SUZUKI");
displayDetails.apply(cars,['lalla']);
displayDetails.apply(truck,['dee'])