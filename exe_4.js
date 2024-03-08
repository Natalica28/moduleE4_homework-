function Device(){
    this.pluggedIn = function (pluggedIn){
        if (pluggedIn === true){
            console.log(this.name + " is turned on")
        } else {
            console.log(this.name + " is turned off")
        }
    }
};

function Fridge(name, brand, capacity, color, nofrost, power){
    this.name = name,
    this.brand = brand,
    this.capacity = capacity,
    this.color = color,
    this.nofrost = nofrost,
    this.power = power
};

function Kettle(name, brand, capacity, color, material, power){
    this.name = name,
    this.brand = brand,
    this.capacity = capacity,
    this.color = color,
    this.material = material,
    this.power = power
};

Fridge.prototype = new Device()
Kettle.prototype = new Device()

const fridge = new Fridge('Fridge', 'Biryusa', 250, 'white', false, 490)
const kettle = new Kettle('Kettle', 'Tefal', 1.5, 'grey', 'metal', 2400)

console.log(fridge)
console.log(kettle)

function sumPowerAllDevices(...devices) {
    let sumPower = 0;

    devices.forEach(device => {
        if (device.pluggedIn) {
            sumPower += device.power;
        }
    });

    return sumPower;
}

fridge.pluggedIn(true);
kettle.pluggedIn(true);

const sumPower = sumPowerAllDevices(fridge, kettle);
console.log(`Sum power all devices is ${sumPower} w`);