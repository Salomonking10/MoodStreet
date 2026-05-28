const db = require("../config/db");

const moods = ["aburrido", "estresado", "activo", "productivo", "bajoneado", "solo"];

function verificarSesion(req, res, next) {
  if (!req.session.usuario) {
    res.status(401).json({ ok: false, mensaje: "Debes iniciar sesion." });
    return;
  }

  next();
}

async function consultar(req, res) {
  try {
    const [filas] = await db.execute(
      "SELECT mood, tareas, completado FROM progreso WHERE usuario_id = ?",
      [req.session.usuario.id]
    );
    const progreso = {};

    filas.forEach(function (fila) {
      progreso[fila.mood] = {
        tareas: typeof fila.tareas === "string" ? JSON.parse(fila.tareas) : fila.tareas,
        semana_completa: Boolean(fila.completado)
      };
    });

    res.json({ ok: true, progreso: progreso });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, mensaje: "No fue posible consultar el progreso." });
  }
}

async function guardar(req, res) {
  const mood = req.body.mood;
  const tareas = req.body.tareas;
  const completado = req.body.semana_completa;
  const tareasValidas = Array.isArray(tareas) && tareas.length <= 30 && tareas.every(function (tarea) {
    return typeof tarea === "boolean";
  });

  if (!moods.includes(mood) || !tareasValidas || typeof completado !== "boolean") {
    res.status(422).json({ ok: false, mensaje: "Datos de progreso no validos." });
    return;
  }

  try {
    await db.execute(
      `INSERT INTO progreso (usuario_id, mood, tareas, completado, fecha_actualizacion)
       VALUES (?, ?, ?, ?, CURRENT_DATE)
       ON DUPLICATE KEY UPDATE tareas = VALUES(tareas), completado = VALUES(completado),
       fecha_actualizacion = CURRENT_DATE`,
      [req.session.usuario.id, mood, JSON.stringify(tareas), completado ? 1 : 0]
    );
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, mensaje: "No fue posible guardar el progreso." });
  }
}

module.exports = { verificarSesion, consultar, guardar };
