function Carro(portas, modelo, motor, potencia, velocidade) {
    this.portas = portas;
    this.modelo = modelo;
    this.motor = motor;
    this.potencia = potencia;
    this.velocidade = velocidade;
}

function Pickup(portas, modelo, motor, potencia, velocidade) {
    Carro.call(this, portas);
    this.modelo = modelo;
    this.motor = motor;
    this.potencia = potencia;
    this.velocidade = velocidade;
}

function Truck(portas, modelo, motor, potencia, velocidade) {
    Carro.call(this, portas);
    this.modelo = modelo;
    this.motor = motor;
    this.potencia = potencia;
    this.velocidade = velocidade;
}

const mazda = new Carro( 2, "FD3S", "Wenkel", "236hp", "240km/h");
const dodge = new Pickup( 2, "Viper SRT-10", "V8", "400hp", "325km/h");
const volvo = new Truck( 2, "Viper SRT-10", "V8", "400hp", "325km/h");

console.log(mazda);
console.log(dodge);
console.log(volvo);