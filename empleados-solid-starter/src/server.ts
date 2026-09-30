import "dotenv/config";
import express from "express";
import { Database } from "./config/database";
import { router } from "./routes/index.routes.js";

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT ?? 3000);
const db = Database.getInstance();

app.use("/", router);

const initServer = async () => {
  try {
    await db.getConnection();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

initServer();
