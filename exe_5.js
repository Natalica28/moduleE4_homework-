class Device { 
    constructor() {
        this.pluggedIn = function (){
            return this._isPluggedIn;
        }
    }
}

class Fridge extends Device { 
    constructor(name, brand, capacity, color, nofrost, power, pluggedIn){
        super(pluggedIn);
        this.name = name;
        this.brand = brand;
        this.capacity = capacity;
        this.color = color;
        this.nofrost = nofrost;
        this.power = power;
        this._isPluggedIn = true
    }

}
const fridge = new Fridge('Fridge', 'Biryusa', 250, 'white', false, 490)
console.log(fridge)

class Kettle extends Device { 
    constructor(name, brand, capacity, color, material, power, pluggedIn){
        super(pluggedIn);
        this.name = name;
        this.brand = brand;
        this.capacity = capacity;
        this.color = color;
        this.material = material;
        this.power = power;
        this._isPluggedIn = true
    }
}
const kettle = new Kettle('Kettle', 'Tefal', 1.5, 'grey', 'metal', 2400)
console.log(kettle)

function sumPowerAllDevices(...devices) {
    let sumPower = 0;

    devices.forEach(device => {
        if (device.pluggedIn()) {
            sumPower += device.power;
        }
    });

    return sumPower;
}
const sumPower = sumPowerAllDevices(fridge, kettle);
console.log(`Sum power all devices is ${sumPower} w`);
