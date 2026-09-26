interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}

interface Inventario {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): Equipo[];
}

class InventarioViejo {
  private items: string[] = [];

  agregarItem(item: string): void {
    this.items.push(item);
  }

  obtenerItems(): string[] {
    return this.items;
  }
}

class AdaptadorInventario implements Inventario {
  private inventarioViejo: InventarioViejo;
  private equipos: Equipo[] = [];

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.equipos.push({ nombre, tipo, estado });
    const itemString = `${nombre}|${tipo}|${estado}`;
    this.inventarioViejo.agregarItem(itemString);
  }

  listarEquipos(): Equipo[] {
    return this.equipos;
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
