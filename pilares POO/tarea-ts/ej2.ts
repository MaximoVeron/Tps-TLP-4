class CuentaBancaria {
  titular: string;
  private saldo: number;
  private historial: string[] = [];

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.historial.push(`saldo inicial: ${saldoInicial}`);
  }

  depositar(monto: number): void {
    if (monto <= 0) {
      throw new Error("El monto a depositar debe ser mayor a 0.");
    }

    this.saldo += monto;
    this.historial.push(`depósito: +${monto}`);
  }

  retirar(monto: number): void {
    if (monto <= 0) {
      throw new Error("El monto a retirar debe ser mayor a 0.");
    }

    if (monto > this.saldo) {
      throw new Error("No hay saldo suficiente para realizar el retiro.");
    }

    this.saldo -= monto;
    this.historial.push(`retiro: -${monto}`);
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  obtenerHistorial(): string[] {
    return [...this.historial];
  }
}

const cuenta = new CuentaBancaria("Yolo", 5000);

console.log(cuenta.consultarSaldo());
cuenta.depositar(2000);
cuenta.retirar(500);
console.log(cuenta.consultarSaldo());
console.log(cuenta.obtenerHistorial());

try {
  cuenta.retirar(100000);
} catch (error) {
  console.log((error as Error).message);
}
