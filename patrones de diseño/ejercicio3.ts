interface Observador {
  actualizar(equipoNombre: string, nuevoEstado: string): void;
}

class Equipo {
  private observadores: Observador[] = [];

  constructor(
    private nombre: string,
    private tipo: string,
    private estado: string
  ) {}

  agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  private notificarObservadores(): void {
    for (const observador of this.observadores) {
      observador.actualizar(this.nombre, this.estado);
    }
  }
}

class Soporte implements Observador {
  actualizar(equipoNombre: string, nuevoEstado: string): void {
    console.log(`Soporte notificado: ${equipoNombre} ha cambiado su estado a ${nuevoEstado}.`);
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
