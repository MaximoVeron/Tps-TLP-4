import mongoose from "mongoose";

export class Database {
  public static instance: Database;

  private constructor() {}

  static getInstance(): Database {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }

  async getConnection(): Promise<typeof mongoose> {
    const MONGO_URI =
      process.env.MONGO_URI ?? "mongodb://localhost:27017/employees_db";

    try {
      const connection = await mongoose.connect(MONGO_URI);
      console.log("MongoDB conectado");
      return connection;
    } catch (error) {
      console.error("No se pudo conectar a MongoDB", error);
      throw new Error("Algo salió mal al conectar con la base de datos");
    }
  }
}
