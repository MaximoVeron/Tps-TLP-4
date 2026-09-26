// Método venderUnidades(cantidad: number): si hayStock(cantidad) es true, descuenta del stock; si no, no vende nada (decidí vos si avisa con un mensaje o lanza un Error — cualquiera de las dos es válida, pero justificalo).

// Método aplicarDescuento(porcentaje: number): number que devuelva el precio final sin modificar el precio original del producto (el descuento es una simulación, no un cambio permanente).

class Product {
  name: string;
  price: number;
  category: string;
  stock: boolean;

  constructor(name: string, price: number, category: string, stock: boolean) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.stock = stock;
  }

  describir(): string {
    return `${this.name} (${this.category}), ${this.price}, ${this.stock}`;
  }

  hayStock(): string {
    if (this.stock !== true) {
      return "No hay stock para el producto";
    } else {
      return "stock disponible";
    }
  }

  venderUnidades(): string {
    if (this.stock !== true) {
      return "No hay stock";
    } else {
      return "compra exitosa";
    }
  }

  aplicarDescuento(): void {
    console.log(`El precio actual del producto es de ${this.price}`);
    let nuevoPrecio = this.price - 10;
    console.log(`El precio con descuento es de ${nuevoPrecio}`);
  }
}

const product1 = new Product("Teclado", 50000, "Periféricos", true);
console.log(product1);
console.log(product1.describir());
console.log(product1.hayStock());
console.log(product1.venderUnidades());
console.log(product1.aplicarDescuento());
