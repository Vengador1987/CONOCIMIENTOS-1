"use strict";

// 1- Generar una contraseña (número entero aleatorio del 0 al 100).

const password = Math.round(Math.random() * 100);

console.log("contraseña:", password, typeof(password));

// 2- Pedir al usuario que introduzca un número dentro de ese rango (prompt).
// 3- Si el número introducido es igual a la contraseña, aparecerá en pantalla un mensaje,
// indicando que ha ganado (alert) y terminará la función; si no, volverá al paso 2.
// El usuario tendrá 5 oportunidades de acertar, si no lo consigue, aparecerá un mensaje indicando que ha perdido (alert).


function putPassword() {
  for (let i = 0; i < 5; i++) {
      let number = prompt("Introduce un numero entero, del 0 al 100:");
      let usernumber = parseInt(number);
      if (password !== usernumber) {
      alert("Has perdido");
    } else {
      return alert("Has ganado");
    }
  }
}

putPassword()


//EXTRA: Haz que después de cada intento fallido,
// el juego indique con un alert si el numero buscado es mayor o menor al introducido.


function putPassword2() {
  for (let i = 0; i < 5; i++) {
      let number2 = prompt("Introduce un numero entero, del 0 al 100:");
      let usernumber2 = parseInt(number2);
      if (password < usernumber2) {
      alert("El número que buscas es menor");
    } else if (password > usernumber2) {
        alert("El número que buscas es mayor")
    } else {
      return alert("Has ganado");
    }
  }
}

putPassword2()