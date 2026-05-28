const bcrypt = require("bcrypt");
const db = require("../config/db");

function sesion(req, res) {
  res.json({ ok: true, usuario: req.session.usuario || null });
}

async function autenticacion(req, res) {
  const accion = req.body.accion;

  if (accion === "logout") {
    req.session.destroy(function (error) {
      if (error) {
        res.status(500).json({ ok: false, mensaje: "No fue posible cerrar la sesion." });
        return;
      }

      res.json({ ok: true });
    });
    return;
  }

  try {
    if (accion === "registro") {
      await registrar(req, res);
      return;
    }

    if (accion === "login") {
      await iniciarSesion(req, res);
      return;
    }

    res.status(400).json({ ok: false, mensaje: "Accion no valida." });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.status(409).json({ ok: false, mensaje: "Ese correo ya esta registrado." });
      return;
    }

    console.error(error);
    res.status(500).json({ ok: false, mensaje: "No fue posible conectar con la base de datos." });
  }
}

async function registrar(req, res) {
  const nombre = String(req.body.nombre || "").trim();
  const correo = String(req.body.correo || "").trim().toLowerCase();
  const clave = String(req.body.clave || "");

  if (nombre.length < 2) {
    res.status(422).json({ ok: false, mensaje: "Escribe un nombre valido." });
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    res.status(422).json({ ok: false, mensaje: "Escribe un correo valido." });
    return;
  }

  if (clave.length < 6) {
    res.status(422).json({ ok: false, mensaje: "La contrasena debe tener al menos 6 caracteres." });
    return;
  }

  const contrasena = await bcrypt.hash(clave, 10);
  const [resultado] = await db.execute(
    "INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)",
    [nombre, correo, contrasena]
  );

  req.session.usuario = { id: resultado.insertId, nombre: nombre, correo: correo };
  res.status(201).json({ ok: true, usuario: req.session.usuario });
}

async function iniciarSesion(req, res) {
  const correo = String(req.body.correo || "").trim().toLowerCase();
  const clave = String(req.body.clave || "");
  const [filas] = await db.execute(
    "SELECT id, nombre, correo, contrasena FROM usuarios WHERE correo = ? LIMIT 1",
    [correo]
  );
  const usuario = filas[0];
  const contrasena = usuario ? usuario.contrasena.replace(/^\$2y\$/, "$2b$") : "";
  const coincide = usuario ? await bcrypt.compare(clave, contrasena) : false;

  if (!coincide) {
    res.status(401).json({ ok: false, mensaje: "Correo o contrasena incorrectos." });
    return;
  }

  req.session.usuario = { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo };
  res.json({ ok: true, usuario: req.session.usuario });
}

module.exports = { sesion, autenticacion };
