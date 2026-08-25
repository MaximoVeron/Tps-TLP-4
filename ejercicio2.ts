abstract class EquipoBase {
  constructor(protected nombre: string) {}

  abstract detalles(): string;
}

class Notebook extends EquipoBase {
  constructor(nombre: string, private ram: string, private procesador: string) {
    super(nombre);
  }

  detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop extends EquipoBase {
  constructor(nombre: string, private ram: string, private procesador: string) {
    super(nombre);
  }

  detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor extends EquipoBase {
  constructor(nombre: string, private ram: string, private procesador: string) {
    super(nombre);
  }

  detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): EquipoBase {
    switch (tipo) {
      case "Notebook":
        return new Notebook(nombre, ram, procesador);
      case "Desktop":
        return new Desktop(nombre, ram, procesador);
      case "Servidor":
        return new Servidor(nombre, ram, procesador);
      default:
        throw new Error("Tipo de equipo no válido");
    }
  }
}

const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());
