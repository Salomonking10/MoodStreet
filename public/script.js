const pantallas = document.querySelectorAll(".screen");
const logo = document.querySelector(".logo");
const rutinasConfiguradas = {};
let usuarioActual = null;

function mostrarPantalla(nombrePantalla) {
  pantallas.forEach(function (pantalla) {
    pantalla.classList.remove("active");
  });

  document.getElementById(nombrePantalla).classList.add("active");

  if (nombrePantalla !== "respiracion") {
    pausarRespiracion();
  }

  if (nombrePantalla !== "enfoque") {
    pausarEnfoque();
  }
}

function conectarBoton(idBoton, nombrePantalla) {
  document.getElementById(idBoton).addEventListener("click", function () {
    mostrarPantalla(nombrePantalla);
  });
}

conectarBoton("card-aburrido", "actividades");
conectarBoton("card-estresado", "actividades-estresado");
conectarBoton("card-activo", "actividades-activo");
conectarBoton("card-productivo", "actividades-productivo");
conectarBoton("card-bajoneado", "actividades-bajoneado");
conectarBoton("card-solo", "actividades-solo");
conectarBoton("volver-inicio", "inicio");
conectarBoton("volver-inicio-estresado", "inicio");
conectarBoton("volver-inicio-activo", "inicio");
conectarBoton("volver-inicio-productivo", "inicio");
conectarBoton("volver-inicio-bajoneado", "inicio");
conectarBoton("volver-inicio-solo", "inicio");
conectarBoton("ver-peliculas", "peliculas");
conectarBoton("volver-actividades", "actividades");
conectarBoton("ver-juegos", "juegos");
conectarBoton("volver-juegos", "actividades");
conectarBoton("ver-explorar", "explorar");
conectarBoton("volver-explorar", "actividades");
conectarBoton("ver-rutina", "rutina");
conectarBoton("volver-rutina", "actividades");
conectarBoton("ver-respiracion", "respiracion");
conectarBoton("volver-respiracion", "actividades-estresado");
conectarBoton("ver-desahogo", "desahogo");
conectarBoton("volver-desahogo", "actividades-estresado");
conectarBoton("ver-sonidos", "sonidos");
conectarBoton("volver-sonidos", "actividades-estresado");
conectarBoton("ver-rutina-estresado", "rutina-estresado");
conectarBoton("volver-rutina-estresado", "actividades-estresado");
conectarBoton("ver-entrenamiento", "entrenamiento");
conectarBoton("volver-entrenamiento", "actividades-activo");
conectarBoton("ver-explorar-activo", "explorar-activo");
conectarBoton("volver-explorar-activo", "actividades-activo");
conectarBoton("ver-musica-activo", "musica-activo");
conectarBoton("volver-musica-activo", "actividades-activo");
conectarBoton("ver-rutina-activo", "rutina-activo");
conectarBoton("volver-rutina-activo", "actividades-activo");
conectarBoton("ver-enfoque", "enfoque");
conectarBoton("volver-enfoque", "actividades-productivo");
conectarBoton("ver-tareas", "tareas-productivo");
conectarBoton("volver-tareas", "actividades-productivo");
conectarBoton("ver-musica-productivo", "musica-productivo");
conectarBoton("volver-musica-productivo", "actividades-productivo");
conectarBoton("ver-rutina-productivo", "rutina-productivo");
conectarBoton("volver-rutina-productivo", "actividades-productivo");
conectarBoton("ver-autocuidado", "autocuidado");
conectarBoton("volver-autocuidado", "actividades-bajoneado");
conectarBoton("ver-libros-bajoneado", "libros-bajoneado");
conectarBoton("volver-libros-bajoneado", "actividades-bajoneado");
conectarBoton("ver-lugar-bajoneado", "lugar-bajoneado");
conectarBoton("volver-lugar-bajoneado", "actividades-bajoneado");
conectarBoton("ver-rutina-bajoneado", "rutina-bajoneado");
conectarBoton("volver-rutina-bajoneado", "actividades-bajoneado");
conectarBoton("ver-plan-solo", "plan-solo");
conectarBoton("volver-plan-solo", "actividades-solo");
conectarBoton("ver-ideas-solo", "ideas-solo");
conectarBoton("volver-ideas-solo", "actividades-solo");
conectarBoton("ver-explorar-solo", "explorar-solo");
conectarBoton("volver-explorar-solo", "actividades-solo");
conectarBoton("ver-rutina-solo", "rutina-solo");
conectarBoton("volver-rutina-solo", "actividades-solo");

logo.addEventListener("click", function (event) {
  event.preventDefault();
  mostrarPantalla("inicio");
});

/* Busqueda de planes en Google Maps */
const inputUbicacion = document.getElementById("ubicacion");
const errorUbicacion = document.getElementById("error-ubicacion");

document.querySelectorAll(".map-button").forEach(function (boton) {
  boton.addEventListener("click", function () {
    const ubicacion = inputUbicacion.value.trim();

    if (ubicacion === "") {
      errorUbicacion.textContent = "Escribe una ubicación para buscar.";
      inputUbicacion.focus();
      return;
    }

    errorUbicacion.textContent = "";
    const busqueda = boton.dataset.busqueda + " cerca de " + ubicacion;
    const enlace = "https://www.google.com/maps/search/" + encodeURIComponent(busqueda);
    window.open(enlace, "_blank");
  });
});

const inputUbicacionActivo = document.getElementById("ubicacion-activo");
const errorUbicacionActivo = document.getElementById("error-ubicacion-activo");

document.querySelectorAll(".active-map-button").forEach(function (boton) {
  boton.addEventListener("click", function () {
    const ubicacion = inputUbicacionActivo.value.trim();

    if (ubicacion === "") {
      errorUbicacionActivo.textContent = "Escribe una ubicación para buscar.";
      inputUbicacionActivo.focus();
      return;
    }

    errorUbicacionActivo.textContent = "";
    const busqueda = boton.dataset.busqueda + " cerca de " + ubicacion;
    const enlace = "https://www.google.com/maps/search/" + encodeURIComponent(busqueda);
    window.open(enlace, "_blank");
  });
});

function configurarBusquedaMapa(selectorBoton, idInput, idError) {
  const input = document.getElementById(idInput);
  const error = document.getElementById(idError);

  document.querySelectorAll(selectorBoton).forEach(function (boton) {
    boton.addEventListener("click", function () {
      const ubicacion = input.value.trim();

      if (ubicacion === "") {
        error.textContent = "Escribe una ubicación para buscar.";
        input.focus();
        return;
      }

      error.textContent = "";
      const busqueda = boton.dataset.busqueda + " cerca de " + ubicacion;
      window.open("https://www.google.com/maps/search/" + encodeURIComponent(busqueda), "_blank");
    });
  });
}

configurarBusquedaMapa(".low-map-button", "ubicacion-bajoneado", "error-ubicacion-bajoneado");
configurarBusquedaMapa(".solo-map-button", "ubicacion-solo", "error-ubicacion-solo");

/* Rutinas semanales */
function configurarRutina(rutina, mood, mensajeCompleto, mensajePendiente) {
  const tarjetasDias = rutina.querySelectorAll(".day-card");
  const botonTerminar = rutina.querySelector(".finish-week");
  const botonReiniciar = rutina.querySelector(".reset-week");
  const mensaje = rutina.querySelector(".week-message");
  const tituloMensaje = mensaje.querySelector("h2");
  const textoMensaje = mensaje.querySelector("p");

  function actualizarDia(tarjeta) {
    const tareas = tarjeta.querySelectorAll('input[type="checkbox"]');
    const botonDia = tarjeta.querySelector(".day-finish");
    const diaCompleto = Array.from(tareas).every(function (tarea) {
      return tarea.checked;
    });

    tarjeta.classList.toggle("day-completed", diaCompleto);
    botonDia.textContent = diaCompleto ? "Día completado" : "Día terminado";
  }

  function obtenerTareas() {
    return Array.from(rutina.querySelectorAll('input[type="checkbox"]')).map(function (tarea) {
      return tarea.checked;
    });
  }

  function guardarEstado(semanaCompleta) {
    guardarProgreso(mood, obtenerTareas(), semanaCompleta);
  }

  tarjetasDias.forEach(function (tarjeta) {
    const botonDia = tarjeta.querySelector(".day-finish");
    const tareas = tarjeta.querySelectorAll('input[type="checkbox"]');

    botonDia.addEventListener("click", function () {
      tareas.forEach(function (tarea) {
        tarea.checked = true;
      });

      actualizarDia(tarjeta);
      guardarEstado(false);
    });

    tareas.forEach(function (tarea) {
      tarea.addEventListener("change", function () {
        actualizarDia(tarjeta);
        mensaje.hidden = true;
        guardarEstado(false);
      });
    });
  });

  botonTerminar.addEventListener("click", function () {
    const todasLasTareas = rutina.querySelectorAll('input[type="checkbox"]');
    const semanaCompleta = Array.from(todasLasTareas).every(function (tarea) {
      return tarea.checked;
    });

    if (!semanaCompleta) {
      tituloMensaje.textContent = "Aún faltan actividades";
      textoMensaje.textContent = mensajePendiente;
      mensaje.hidden = false;
      return;
    }

    tituloMensaje.textContent = "¡Semana completada!";
    textoMensaje.textContent = mensajeCompleto;
    mensaje.hidden = false;
    guardarEstado(true);
  });

  botonReiniciar.addEventListener("click", function () {
    rutina.querySelectorAll('input[type="checkbox"]').forEach(function (tarea) {
      tarea.checked = false;
    });

    tarjetasDias.forEach(actualizarDia);
    mensaje.hidden = true;
    guardarEstado(false);
  });

  rutinasConfiguradas[mood] = {
    cargar: function (progreso) {
      const valores = progreso ? progreso.tareas : [];
      rutina.querySelectorAll('input[type="checkbox"]').forEach(function (tarea, posicion) {
        tarea.checked = valores[posicion] === true;
      });

      tarjetasDias.forEach(actualizarDia);

      if (progreso && progreso.semana_completa && obtenerTareas().every(Boolean)) {
        tituloMensaje.textContent = "¡Semana completada!";
        textoMensaje.textContent = mensajeCompleto;
        mensaje.hidden = false;
      } else {
        mensaje.hidden = true;
      }
    }
  };
}

configurarRutina(
  document.getElementById("rutina"),
  "aburrido",
  "El aburrimiento no pudo contigo: llenaste tus días de movimiento, conexión y nuevas experiencias. Sigue buscando lo que enciende tu mood.",
  "Completa las tareas de cada día antes de terminar tu semana. Cada pequeño plan cuenta para vencer el aburrimiento."
);

configurarRutina(
  document.getElementById("rutina-estresado"),
  "estresado",
  "Hiciste espacio para respirar y bajar la carga. Cuidar tu calma también es avanzar.",
  "Completa cada pausa de la rutina antes de cerrarla. Reducir la tensión se construye paso a paso."
);

configurarRutina(
  document.getElementById("rutina-activo"),
  "activo",
  "Convertiste tu energía en movimiento y experiencias. Tu power vale más cuando lo disfrutas y lo cuidas.",
  "Completa cada reto antes de cerrar la semana. Tu energía se convierte en progreso cuando la canalizas."
);

configurarRutina(
  document.getElementById("rutina-productivo"),
  "productivo",
  "Tu impulso se convirtió en progreso real. Productividad también es elegir bien dónde poner tu energía.",
  "Completa tus pasos antes de cerrar la semana. El avance real se construye terminando lo importante."
);

configurarRutina(
  document.getElementById("rutina-bajoneado"),
  "bajoneado",
  "Avanzaste incluso en días difíciles. Ir despacio también es avanzar, y cuidarte ya es una victoria.",
  "Completa tus pequeños cuidados antes de cerrar la semana. No necesitas ir rápido para estar avanzando."
);

configurarRutina(
  document.getElementById("rutina-solo"),
  "solo",
  "Descubriste que tu tiempo también puede estar lleno de planes, curiosidad y momentos que valen la pena.",
  "Completa cada idea antes de terminar la semana. Crear buenos momentos también depende de ti."
);

/* Entrenamiento rapido */
const pasosEntrenamiento = document.querySelectorAll('.workout-step input[type="checkbox"]');
const mensajeEntrenamiento = document.getElementById("mensaje-entrenamiento");

document.getElementById("terminar-entrenamiento").addEventListener("click", function () {
  const completo = Array.from(pasosEntrenamiento).every(function (paso) {
    return paso.checked;
  });

  if (completo) {
    mensajeEntrenamiento.textContent = "Actividad completada. Usa esa energía en algo que te haga sentir bien.";
    mensajeEntrenamiento.classList.add("completed");
  } else {
    mensajeEntrenamiento.textContent = "Completa las tres etapas antes de terminar el entrenamiento.";
    mensajeEntrenamiento.classList.remove("completed");
  }

  mensajeEntrenamiento.hidden = false;
});

pasosEntrenamiento.forEach(function (paso) {
  paso.addEventListener("change", function () {
    mensajeEntrenamiento.hidden = true;
  });
});

/* Temporizador de enfoque */
const tiempoEnfoque = document.getElementById("tiempo-enfoque");
const estadoEnfoque = document.getElementById("estado-enfoque");
const botonIniciarEnfoque = document.getElementById("iniciar-enfoque");
let temporizadorEnfoque;
let segundosEnfoque = 300;

function dibujarTiempoEnfoque() {
  const minutos = String(Math.floor(segundosEnfoque / 60)).padStart(2, "0");
  const segundos = String(segundosEnfoque % 60).padStart(2, "0");
  tiempoEnfoque.textContent = minutos + ":" + segundos;
}

function pausarEnfoque() {
  if (temporizadorEnfoque) {
    clearInterval(temporizadorEnfoque);
    temporizadorEnfoque = null;
    botonIniciarEnfoque.textContent = "Continuar";
  }
}

function reiniciarEnfoque() {
  pausarEnfoque();
  segundosEnfoque = 300;
  botonIniciarEnfoque.textContent = "Comenzar";
  estadoEnfoque.textContent = "Prepara tu tarea principal y elimina distracciones.";
  estadoEnfoque.classList.remove("completed");
  dibujarTiempoEnfoque();
}

botonIniciarEnfoque.addEventListener("click", function () {
  if (temporizadorEnfoque) {
    pausarEnfoque();
    return;
  }

  if (segundosEnfoque === 0) {
    reiniciarEnfoque();
  }

  botonIniciarEnfoque.textContent = "Pausar";
  estadoEnfoque.textContent = "Sesión en curso. Mantén el foco en una sola tarea.";
  temporizadorEnfoque = setInterval(function () {
    segundosEnfoque -= 1;
    dibujarTiempoEnfoque();

    if (segundosEnfoque === 0) {
      clearInterval(temporizadorEnfoque);
      temporizadorEnfoque = null;
      botonIniciarEnfoque.textContent = "Repetir";
      estadoEnfoque.textContent = "Sesión completada. Ya avanzaste; decide si continúas o tomas una pausa.";
      estadoEnfoque.classList.add("completed");
    }
  }, 1000);
});

document.getElementById("reiniciar-enfoque").addEventListener("click", reiniciarEnfoque);
reiniciarEnfoque();

/* Lista de tareas productivas */
const inputTarea = document.getElementById("nueva-tarea");
const listaTareas = document.getElementById("lista-tareas");
const errorTarea = document.getElementById("error-tarea");

function agregarTarea() {
  const texto = inputTarea.value.trim();

  if (texto === "") {
    errorTarea.textContent = "Escribe una tarea antes de agregarla.";
    inputTarea.focus();
    return;
  }

  const elemento = document.createElement("li");
  const etiqueta = document.createElement("label");
  const casilla = document.createElement("input");
  const contenido = document.createElement("span");

  casilla.type = "checkbox";
  contenido.textContent = texto;
  etiqueta.appendChild(casilla);
  etiqueta.appendChild(contenido);
  elemento.appendChild(etiqueta);
  listaTareas.appendChild(elemento);

  inputTarea.value = "";
  errorTarea.textContent = "";
}

document.getElementById("agregar-tarea").addEventListener("click", agregarTarea);

inputTarea.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});

document.getElementById("limpiar-tareas").addEventListener("click", function () {
  listaTareas.querySelectorAll("li").forEach(function (tarea) {
    if (tarea.querySelector("input").checked) {
      tarea.remove();
    }
  });
});

/* Planes marcables */
function configurarPlanMarcable(idPlan, mensajeCompleto, mensajePendiente) {
  const plan = document.getElementById(idPlan);
  const tareas = plan.querySelectorAll('input[type="checkbox"]');
  const boton = plan.querySelector(".gentle-finish");
  const mensaje = plan.querySelector(".gentle-message");

  boton.addEventListener("click", function () {
    const completo = Array.from(tareas).some(function (tarea) {
      return tarea.checked;
    });

    mensaje.textContent = completo ? mensajeCompleto : mensajePendiente;
    mensaje.classList.toggle("completed", completo);
    mensaje.hidden = false;
  });

  tareas.forEach(function (tarea) {
    tarea.addEventListener("change", function () {
      mensaje.hidden = true;
    });
  });
}

configurarPlanMarcable(
  "plan-autocuidado",
  "Bien hecho. Un gesto pequeño de cuidado sigue siendo importante.",
  "Marca al menos un cuidado que puedas darte hoy."
);

configurarPlanMarcable(
  "plan-individual",
  "Ya tienes plan. Disfrutar tu tiempo también cuenta.",
  "Elige al menos una idea para convertirla en tu plan."
);

/* Desahogo mental */
const notaEstres = document.getElementById("nota-estres");

document.getElementById("limpiar-nota").addEventListener("click", function () {
  notaEstres.value = "";
  notaEstres.focus();
});

/* Respiracion guiada */
const fasesRespiracion = [
  { nombre: "Inhala", duracion: 4, clase: "inhale" },
  { nombre: "Sostén", duracion: 4, clase: "hold" },
  { nombre: "Exhala", duracion: 6, clase: "exhale" }
];
const circuloRespiracion = document.getElementById("circulo-respiracion");
const faseRespiracion = document.getElementById("fase-respiracion");
const segundosFase = document.getElementById("segundos-fase");
const tiempoRespiracion = document.getElementById("tiempo-respiracion");
const botonIniciarRespiracion = document.getElementById("iniciar-respiracion");
let temporizadorRespiracion;
let tiempoRestante = 60;
let faseActual = 0;
let tiempoFase = fasesRespiracion[0].duracion;

function actualizarRespiracion() {
  const fase = fasesRespiracion[faseActual];
  faseRespiracion.textContent = fase.nombre;
  segundosFase.textContent = tiempoFase;
  tiempoRespiracion.textContent = "00:" + String(tiempoRestante).padStart(2, "0");
  circuloRespiracion.className = "breathing-circle " + fase.clase;
}

function pausarRespiracion() {
  if (temporizadorRespiracion) {
    clearInterval(temporizadorRespiracion);
    temporizadorRespiracion = null;
    botonIniciarRespiracion.textContent = "Continuar";
  }
}

function reiniciarRespiracion() {
  pausarRespiracion();
  tiempoRestante = 60;
  faseActual = 0;
  tiempoFase = fasesRespiracion[0].duracion;
  botonIniciarRespiracion.textContent = "Comenzar";
  actualizarRespiracion();
}

botonIniciarRespiracion.addEventListener("click", function () {
  if (temporizadorRespiracion) {
    pausarRespiracion();
    return;
  }

  if (tiempoRestante === 0) {
    reiniciarRespiracion();
  }

  botonIniciarRespiracion.textContent = "Pausar";
  temporizadorRespiracion = setInterval(function () {
    tiempoRestante -= 1;
    tiempoFase -= 1;

    if (tiempoRestante === 0) {
      clearInterval(temporizadorRespiracion);
      temporizadorRespiracion = null;
      faseRespiracion.textContent = "Listo";
      segundosFase.textContent = "✓";
      tiempoRespiracion.textContent = "00:00";
      circuloRespiracion.className = "breathing-circle completed";
      botonIniciarRespiracion.textContent = "Repetir";
      return;
    }

    if (tiempoFase === 0) {
      faseActual = (faseActual + 1) % fasesRespiracion.length;
      tiempoFase = fasesRespiracion[faseActual].duracion;
    }

    actualizarRespiracion();
  }, 1000);
});

document.getElementById("reiniciar-respiracion").addEventListener("click", reiniciarRespiracion);
reiniciarRespiracion();

/* Usuarios y guardado de progreso */
const capaAcceso = document.getElementById("auth-overlay");
const cajaSesion = document.getElementById("session-box");
const nombreSesion = document.getElementById("session-name");
const mensajeAcceso = document.getElementById("auth-message");
const formularioLogin = document.getElementById("form-login");
const formularioRegistro = document.getElementById("form-registro");
const botonMostrarLogin = document.getElementById("mostrar-login");
const botonMostrarRegistro = document.getElementById("mostrar-registro");
const supabaseConfig = window.SUPABASE_CONFIG || {};
const supabaseListo =
  window.supabase &&
  supabaseConfig.url &&
  supabaseConfig.anonKey &&
  !supabaseConfig.url.includes("PEGA_AQUI") &&
  !supabaseConfig.anonKey.includes("PEGA_AQUI");
const supabaseCliente = supabaseListo
  ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
  : null;

async function consultarApi(ruta, opciones) {
  const respuesta = await fetch(ruta, opciones);
  const datos = await respuesta.json();

  if (!respuesta.ok || !datos.ok) {
    throw new Error(datos.mensaje || "No se pudo completar la solicitud.");
  }

  return datos;
}

function mostrarModoAcceso(modo) {
  const esLogin = modo === "login";
  document.getElementById("auth-title").textContent = esLogin ? "Inicia sesión" : "Crea tu cuenta";
  formularioLogin.hidden = !esLogin;
  formularioRegistro.hidden = esLogin;
  botonMostrarLogin.classList.toggle("active", esLogin);
  botonMostrarRegistro.classList.toggle("active", !esLogin);
  mensajeAcceso.textContent = "";
}

function mostrarUsuario(usuario) {
  usuarioActual = usuario;
  nombreSesion.textContent = usuario.nombre || usuario.correo || "usuario";
  cajaSesion.hidden = false;
  capaAcceso.hidden = true;
}

function crearUsuarioSupabase(usuario) {
  return {
    id: usuario.id,
    nombre: (usuario.user_metadata && usuario.user_metadata.nombre) || usuario.email,
    correo: usuario.email
  };
}

function ocultarUsuario() {
  usuarioActual = null;
  cajaSesion.hidden = true;
  capaAcceso.hidden = false;
  Object.keys(rutinasConfiguradas).forEach(function (mood) {
    rutinasConfiguradas[mood].cargar(null);
  });
}

async function cargarProgreso() {
  if (supabaseCliente) {
    const respuesta = await supabaseCliente
      .from("progreso")
      .select("mood,tareas,completado");

    if (respuesta.error) {
      throw new Error(respuesta.error.message);
    }

    const progreso = {};
    respuesta.data.forEach(function (fila) {
      progreso[fila.mood] = {
        tareas: fila.tareas || [],
        semana_completa: fila.completado
      };
    });

    Object.keys(rutinasConfiguradas).forEach(function (mood) {
      rutinasConfiguradas[mood].cargar(progreso[mood] || null);
    });

    return;
  }

  const datos = await consultarApi("/api/progreso");

  Object.keys(rutinasConfiguradas).forEach(function (mood) {
    rutinasConfiguradas[mood].cargar(datos.progreso[mood] || null);
  });
}

async function guardarProgreso(mood, tareas, semanaCompleta) {
  if (!usuarioActual) {
    return;
  }

  try {
    if (supabaseCliente) {
      const respuesta = await supabaseCliente.from("progreso").upsert(
        {
          usuario_id: usuarioActual.id,
          mood: mood,
          tareas: tareas,
          completado: semanaCompleta,
          fecha_actualizacion: new Date().toISOString().slice(0, 10)
        },
        { onConflict: "usuario_id,mood" }
      );

      if (respuesta.error) {
        throw new Error(respuesta.error.message);
      }

      return;
    }

    await consultarApi("/api/progreso", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mood: mood,
        tareas: tareas,
        semana_completa: semanaCompleta
      })
    });
  } catch (error) {
    console.error("No se pudo guardar el progreso:", error.message);
  }
}

async function iniciarAplicacion() {
  try {
    if (supabaseCliente) {
      const respuesta = await supabaseCliente.auth.getUser();

      if (respuesta.error || !respuesta.data.user) {
        ocultarUsuario();
        return;
      }

      mostrarUsuario(crearUsuarioSupabase(respuesta.data.user));
      await cargarProgreso();
      return;
    }

    const datos = await consultarApi("/api/autenticacion");

    if (datos.usuario) {
      mostrarUsuario(datos.usuario);
      await cargarProgreso();
    } else {
      ocultarUsuario();
    }
  } catch (error) {
    ocultarUsuario();
    mensajeAcceso.textContent = supabaseCliente
      ? error.message
      : "Abre la app desde http://localhost:3001 para usar el inicio de sesión.";
  }
}

async function enviarAcceso(evento, accion) {
  evento.preventDefault();
  const formulario = evento.currentTarget;
  const datosFormulario = new FormData(formulario);
  const datos = Object.fromEntries(datosFormulario.entries());
  datos.accion = accion;

  try {
    if (supabaseCliente) {
      let respuesta;

      if (accion === "registro") {
        respuesta = await supabaseCliente.auth.signUp({
          email: datos.correo,
          password: datos.clave,
          options: {
            data: {
              nombre: datos.nombre
            }
          }
        });
      } else {
        respuesta = await supabaseCliente.auth.signInWithPassword({
          email: datos.correo,
          password: datos.clave
        });
      }

      if (respuesta.error) {
        throw new Error(respuesta.error.message);
      }

      if (!respuesta.data.session) {
        formulario.reset();
        mostrarModoAcceso("login");
        mensajeAcceso.textContent = "Cuenta creada. Revisa tu correo o desactiva la confirmación por email en Supabase para la demo.";
        return;
      }

      formulario.reset();
      mostrarUsuario(crearUsuarioSupabase(respuesta.data.user));
      await cargarProgreso();
      return;
    }

    const respuesta = await consultarApi("/api/autenticacion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    });

    formulario.reset();
    mostrarUsuario(respuesta.usuario);
    await cargarProgreso();
  } catch (error) {
    mensajeAcceso.textContent = error.message;
  }
}

botonMostrarLogin.addEventListener("click", function () {
  mostrarModoAcceso("login");
});

botonMostrarRegistro.addEventListener("click", function () {
  mostrarModoAcceso("registro");
});

formularioLogin.addEventListener("submit", function (evento) {
  enviarAcceso(evento, "login");
});

formularioRegistro.addEventListener("submit", function (evento) {
  enviarAcceso(evento, "registro");
});

document.getElementById("cerrar-sesion").addEventListener("click", async function () {
  try {
    if (supabaseCliente) {
      await supabaseCliente.auth.signOut();
    } else {
      await consultarApi("/api/autenticacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accion: "logout" })
      });
    }
  } finally {
    ocultarUsuario();
    mostrarModoAcceso("login");
    mostrarPantalla("inicio");
  }
});

mostrarModoAcceso("login");
iniciarAplicacion();
