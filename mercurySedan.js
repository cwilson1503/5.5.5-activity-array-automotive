//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");



class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers =5;
        this.Passengers = 0;
        this.numberOfWheels =4;
        this.maxSpeed =160;
        this.fuel = 10;
        this.scheduleService = false;

    } 


    checkService() {
        if(this.mileage > 30000) {
            this.scheduleService =true
            return this.scheduleService;
        }
    }

    Start(){ 
        if(this.fuel > 0){
            console.log('engine start');
            return this.started = true
        } else{
            console.log('no fuel');
            return this.started = false
        }
       
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space" );

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }


}


let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)
