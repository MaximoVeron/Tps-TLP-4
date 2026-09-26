class Persona {
  private readonly dni: string;
  nombre: string;
  private _edad: number;
  private _email: string;

  constructor(dni: string, nombre: string, edad: number, email: string) {
    this.dni = dni;
    this.nombre = nombre;
    this._edad = edad;
    this._email = email;
  }

  get edad(): number {
    return this._edad;
  }

  set edad(valor: number) {
    if (valor < 0 || valor > 120) {
      throw new Error("La edad debe estar entre 0 y 120 años.");
    }
    this._edad = valor;
  }

  get email(): string {
    return this._email;
  }

  set email(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("El email debe contener '@'.");
    }
    this._email = valor;
  }

  get esMayorDeEdad(): boolean {
    return this._edad >= 18;
  }

  get datosPublicos(): string {
    return `${this.nombre} (${this.esMayorDeEdad ? "mayor de edad" : "menor de edad"})`;
  }
}

const persona = new Persona("40123456", "Lucía", 30, "lucia@example.com");
console.log(persona.datosPublicos);
console.log(persona.email);
console.log(persona.esMayorDeEdad);

persona.edad = 18;
console.log(persona.edad);

try {
  persona.edad = -1;
} catch (error) {
  console.log((error as Error).message);
}

try {
  persona.email = "correo-sin-arroba";
} catch (error) {
  console.log((error as Error).message);
}
