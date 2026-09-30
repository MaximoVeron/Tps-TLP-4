interface Sender {
  send(to: string, message: string): void;
}

class EmailSender implements Sender {
  send(to: string, message: string): void {
    console.log(`Correo para ${to}: ${message}`);
  }
}

class OrderService {
  constructor(private readonly emailSender: Sender) {}

  createOrder(customerEmail: string): void {
    console.log("Pedido creado");

    const emailSender = new EmailSender();
    emailSender.send(customerEmail, "Tu pedido fue creado");
  }
}

new OrderService(new EmailSender()).createOrder("ana@example.com");
