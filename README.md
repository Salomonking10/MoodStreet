# MoodStreet con Node.js y MySQL

## Acceso local

1. Inicia `MySQL` desde XAMPP.
2. En una terminal dentro de la carpeta del proyecto ejecuta:

```bash
npm install
npm start
```

3. Abre la aplicacion desde:

`http://localhost:3001`

No uses el archivo `index.html` directamente ni `http://localhost/MoodStreet/`.
El registro y el progreso ahora son atendidos por el servidor Node.js.

## Base de datos

- Base: `moodstreet_db`
- Usuario local: `root`
- Contrasena local: vacia

El archivo `database.sql` crea las tablas:

- `usuarios`: `id`, `nombre`, `correo`, `contrasena`, `fecha_registro`.
- `progreso`: `id`, `usuario_id`, `mood`, `tareas`, `completado`, `fecha_actualizacion`.

El campo `contrasena` se almacena protegido mediante `bcrypt`; no se guarda el texto escrito por el usuario.

## Estructura del proyecto

- `public/`: interfaz grafica (`index.html`, `styles.css`, `script.js`).
- `config/db.js`: conexion a MySQL.
- `controllers/`: logica de usuarios y progreso.
- `routes/`: rutas del backend.
- `server.js`: archivo principal del servidor.
- `database.sql`: script para crear la base de datos.

## Backend Node.js

- `server.js`: servidor Express y configuracion principal.
- `GET /api/autenticacion`: revisa si existe una sesion iniciada.
- `POST /api/autenticacion`: registra, inicia o cierra sesion.
- `GET /api/progreso`: consulta el avance del usuario.
- `POST /api/progreso`: guarda las tareas marcadas.

## Tecnologias

- Frontend: HTML, CSS y JavaScript.
- Backend: Node.js con Express.
- Base de datos: MySQL de XAMPP.
