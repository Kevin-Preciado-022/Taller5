// Clase que representa un nodo en la lista enlazada (cada nodo es un paciente)
class NodoPaciente {
  constructor(nombre) {
    this.nombre = nombre;       // Nombre del paciente
    this.siguiente = null;      // Referencia al siguiente paciente en la lista
  }
}

// Implementación de una lista enlazada con comportamiento FIFO (cola)
// Simula la sala de urgencias con pacientes esperando en orden de llegada
class SalaUrgenciasFIFO {
  constructor() {
    this.primero = null;   // Primer paciente en la sala (el que será atendido primero)
    this.ultimo = null;    // Último paciente en la sala (el más reciente en ingresar)
  }

  // Agrega un paciente al final de la sala de espera
  agregarPaciente(nombre) {
    const nuevoPaciente = new NodoPaciente(nombre);
    if (!this.primero) {
      // Si la sala está vacía, el paciente es el primero y el último
      this.primero = this.ultimo = nuevoPaciente;
    } else {
      // Si no está vacía, se agrega al final de la lista
      this.ultimo.siguiente = nuevoPaciente;
      this.ultimo = nuevoPaciente;
    }
    console.log(`Paciente '${nombre}' ingresó a la sala de espera.`);
  }

  // Atiende al primer paciente de la sala (el más antiguo en la cola)
  atenderPaciente() {
    if (!this.primero) {
      console.log("No hay pacientes para atender.");
      return;
    }
    const atendido = this.primero.nombre;
    this.primero = this.primero.siguiente; // Avanza al siguiente paciente
    console.log(`Atendiendo a '${atendido}'...`);
  }

  // Muestra el listado de pacientes que están esperando en la sala
  mostrarEspera() {
    if (!this.primero) {
      console.log("No hay pacientes en espera.");
      return;
    }
    console.log("Pacientes en espera:");
    let actual = this.primero;
    while (actual) {
      console.log(` - ${actual.nombre}`);
      actual = actual.siguiente; // Avanza al siguiente paciente
    }
  }
}

// --- Simulación ---
// Se crea una sala de urgencias
const sala = new SalaUrgenciasFIFO();

// Lista de pacientes a ingresar
const pacientes = ["Ana", "Luis", "Carlos", "María", "Jorge"];

// Se agregan los pacientes a la sala
pacientes.forEach(nombre => sala.agregarPaciente(nombre));

console.log("\nComienza la atención:\n");

// Se atienden los pacientes en orden de llegada
pacientes.forEach(() => sala.atenderPaciente());

console.log("\nEstado final de la sala:");
// Se muestra el estado final de la sala (debería estar vacía)
sala.mostrarEspera();

