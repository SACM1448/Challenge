function mostrarMensaje(texto) {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = texto;
  }
  mostrarMensaje("Ingresa el texto que desees encriptar o desencriptar");
  
  function capturarTexto() {
    // Obtener el valor del texto a encriptar
    const cadena = document.getElementById("texto_encrip").value;
    // Dividir el texto en palabras
    const cadenaDividida = cadena.split(/\s+/);
    // Definir el diccionario de encriptación
    const llaves = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat",
    };
    // Función para encriptar una palabra utilizando el diccionario
    function usarLlaves(palabra) {
      return palabra
        .split("")
        .map((letra) => llaves[letra] || letra)
        .join("");
    }
    
    // Encriptar cada palabra en la cadena
    const palabrasEncriptadas = cadenaDividida.map(usarLlaves);
    const cadenaCompleta = palabrasEncriptadas.join(" ");
    
    mostrarMensaje("Mensaje encriptado: " + cadenaCompleta);
    
    // Ocultar el mensaje de no encontrado y la imagen
    const mensajeNoEncontrado = document.getElementById("mensaje_no_encotrado");
    mensajeNoEncontrado.style.display = "none";
    
    const img = document.getElementById("img");
    img.style.display = "none";
    
    // Mostrar el botón de copiar y ajustar su estilo según el tamaño de la pantalla
    const btn = document.getElementById("btn_cop");
    btn.style.display = "flex";
    
    const mediaQuery = window.matchMedia("(min-width: 1025px)");
    if (mediaQuery.matches) {
      btn.style.marginTop = "110%";
    }
  }
  
