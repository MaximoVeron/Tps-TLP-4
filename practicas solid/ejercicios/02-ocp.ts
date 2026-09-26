interface PaymentMethod {
  pay(amount: number): void;
}

class CardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log();
  }
}

class PaymentProcessor {
  public static Instance: PaymentProcessor;
  private constructor() {}

  static obtenerInstancia() {
    if (!this.Instance) return (this.Instance = new PaymentProcessor());
    return this.Instance;
  }

  processPay(method: PaymentMethod, amount: number): void {
    method.pay(amount);
  }
}
