interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}

class Inventario {
  private static instancia: Inventario | null = null;
  private equipos: Equipo[] = [];

  private constructor() {}

  static obtenerInstancia(): Inventario {
    if (!this.instancia) {
      this.instancia = new Inventario();
    }
    return this.instancia;
  }

  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.equipos.push({ nombre, tipo, estado });
  }

  listarEquipos(): Equipo[] {
    return this.equipos;
  }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());
