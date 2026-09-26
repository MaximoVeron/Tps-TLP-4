interface ISimplePrinter {
  print(document: string): void;
}

class SimplePrinter implements ISimplePrinter {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }
}

new SimplePrinter().print("tarea.txt");
