const path = require("path");
const express = require("express");
const session = require("express-session");
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const progresoRoutes = require("./routes/progresoRoutes");

const app = express();
const port = 3001;

app.use(express.json());
app.use(
  session({
    secret: "moodstreet-clave-local",
    resave: false,
    saveUninitialized: false
  })
);

app.use("/api/autenticacion", authRoutes);
app.use("/api/progreso", progresoRoutes);
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, async function () {
  try {
    await db.query("SELECT 1");
    console.log("MoodStreet listo en http://localhost:" + port);
    console.log("Conexion con MySQL verificada.");
  } catch (error) {
    console.error("No se pudo conectar a MySQL:", error.message);
  }
});
