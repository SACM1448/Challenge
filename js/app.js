"use strict";
function mostrarMensaje(texto) {
  const mensajeI = document.getElementById("mensajeI");
  const mensajeF = document.getElementById("mensajeF");
  mensajeF.textContent = texto;
  mensajeF.style.fontSize="1.5rem";
  mensajeF.style.color="#495057";
  mensajeF.style.marginTop="auto";
  mensajeI.style.display="none";
}
function capturar_texto_dividirlo() {
  const cadena = document.getElementById("texto_encrip").value;
  const regex = /^[a-z\s?!*%@#&,.\b]+$/;
  if (!regex.test(cadena)) {
    mostrarMensaje("El mensaje solo puede contener letras minúsculas y sin acentos.");
  }
  else{
    return cadena.split(/\s+/);    
  }
}

function usar_llaves(diccionario, palabra) {
  // Recorre cada clave en el diccionario
  for (const [clave, valor] of Object.entries(diccionario)) {
    // Crea una expresión regular para buscar todas las ocurrencias de la clave
    const regex = new RegExp(clave, "g");
    // Reemplaza las ocurrencias de la clave en la palabra por el valor correspondiente
    palabra = palabra.replace(regex, valor);
    
  }
  return palabra;
}

function encriptar_texto() {

  const llaves_encrip = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const palabrasEncriptadas = capturar_texto_dividirlo().map((palabra) =>
    usar_llaves(llaves_encrip, palabra)
  );
  const cadenaCompleta = palabrasEncriptadas.join(" ");

  mostrarMensaje(cadenaCompleta);
  mostrar_btnCop_ocultar_p_img();
}

function desencriptar_texto() {

  const llaves_desencrip = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  
  const palabrasDesencriptadas = capturar_texto_dividirlo().map((palabra) =>
    usar_llaves(llaves_desencrip, palabra)
  );
  const cadenaCompleta = palabrasDesencriptadas.join(" ");

  mostrarMensaje(cadenaCompleta);
  mostrar_btnCop_ocultar_p_img();
}

function mostrar_btnCop_ocultar_p_img() {
  const mensajeNoEncontrado = document.getElementById("mensaje_no_encotrado");
  mensajeNoEncontrado.style.display = "none";

  const img = document.getElementById("img");
  img.style.display = "none";

  const btn = document.getElementById("btn_cop");
  btn.style.display = "flex";
}
document.getElementById("copiar").addEventListener("click", function() {
  const mensajeF = document.getElementById("mensajeF");
  navigator.clipboard.writeText(mensajeF.textContent);
});

document.getElementById("encriptar").addEventListener("click", encriptar_texto);
document.getElementById("desencriptar").addEventListener("click", desencriptar_texto);
