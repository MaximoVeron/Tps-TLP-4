class Empleado {
  protected nombre: string;
  protected antiguedad: number;

  constructor(nombre: string, antiguedad: number) {
    this.nombre = nombre;
    this.antiguedad = antiguedad;
  }

  calcularSueldo(): number {
    return 0;
  }

  describir(): string {
    return `${this.nombre} (${this.antiguedad} años) — sueldo: $${this.calcularSueldo()}`;
  }
}

class EmpleadoFijo extends Empleado {
  sueldoBase: number;

  constructor(nombre: string, antiguedad: number, sueldoBase: number) {
    super(nombre, antiguedad);
    this.sueldoBase = sueldoBase;
  }

  calcularSueldo(): number {
    const bonoAntiguedad = this.sueldoBase * 0.02 * this.antiguedad;
    return this.sueldoBase + bonoAntiguedad;
  }
}

class EmpleadoPorHoras extends Empleado {
  horasTrabajadas: number;
  valorHora: number;

  constructor(
    nombre: string,
    antiguedad: number,
    horasTrabajadas: number,
    valorHora: number,
  ) {
    super(nombre, antiguedad);
    this.horasTrabajadas = horasTrabajadas;
    this.valorHora = valorHora;
  }

  calcularSueldo(): number {
    return this.horasTrabajadas * this.valorHora;
  }
}

class EmpleadoPorComision extends Empleado {
  ventasDelMes: number;
  porcentajeComision: number;

  constructor(
    nombre: string,
    antiguedad: number,
    ventasDelMes: number,
    porcentajeComision: number,
  ) {
    super(nombre, antiguedad);
    this.ventasDelMes = ventasDelMes;
    this.porcentajeComision = porcentajeComision;
  }

  calcularSueldo(): number {
    return this.ventasDelMes * this.porcentajeComision;
  }
}

function calcularNomina(empleados: Empleado[]): number {
  let total = 0;

  for (const empleado of empleados) {
    total += empleado.calcularSueldo();
  }

  return total;
}

const empleados: Empleado[] = [
  new EmpleadoFijo("Juan", 3, 1000),
  new EmpleadoPorHoras("Ana", 2, 160, 45),
  new EmpleadoPorComision("Luis", 1, 8000, 0.08),
  new EmpleadoFijo("María", 5, 1500),
];

for (const empleado of empleados) {
  console.log(empleado.describir());
}

console.log(`Nómina total: $${calcularNomina(empleados)}`);
