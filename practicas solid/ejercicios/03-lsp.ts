abstract class GeometricFigure {
  abstract area(): number;
}

class square extends GeometricFigure {
  lado: number;
  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  override area(): number {
    return this.lado ** 2;
  }
}
