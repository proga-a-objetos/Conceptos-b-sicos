class Auto {
    constructor(marca, modelo, color, kilometraje) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.kilometraje = kilometraje;
        this.estado = "Apagado";
    }
    encender() {
        this.estado = "Encendido";
    }
    apagar() {
        this.estado = "Apagado";
    }
}