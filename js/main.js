
const alfajores = 250;
const caramelos = 10;
const gomitas = 100;
const chocolates = 150;
const energetica = 400;
const agua = 120;
const gaseosa = 280;
const jugo = 170;
const marlboro = 500;
const camel = 600;
const chesterfield = 300;
const lucky = 450;

function calculoMonto(producto, cantidad) {
  let monto = 0;
  switch (producto) {
    case 1:
      monto = cantidad * alfajores;
      break;
    case 2:
      monto = cantidad * caramelos;
      break;
    case 3:
      monto = cantidad * gomitas;
      break;
    case 4:
      monto = cantidad * chocolates;
      break;
    case 5:
      monto = cantidad * energetica;
      break;
    case 6:
      monto = cantidad * agua;
      break;
    case 7:
      monto = cantidad * gaseosa;
      break;
    case 8:
      monto = cantidad * jugo;
      break;
    case 9:
      monto = cantidad * marlboro;
      break;
    case 10:
      monto = cantidad * camel;
      break;
    case 11:
      monto = cantidad * chesterfield;
      break;
    case 12:
      monto = cantidad * lucky;
      break;
    default:
      alert("Opción no válida");
      break;
  }
  return monto;
}

function ingresarOpcion() {
  let opcion = Number(
    prompt(
      "Bienvenido a Kioskito De Maní! Presione lo que necesite para continuar\n1. Comprar golosinas\n2. Comprar bebidas\n3. Comprar cigarrillos\n4. Cargar SUBE"
    )
  );

  if (opcion > 4 || opcion < 1) {
    alert("El número que seleccionó no está dentro de las opciones. Por favor, inténtelo nuevamente.");
    return null;
  } else {
    return opcion;
  }
}

let opcionSeleccionada = ingresarOpcion();

if (opcionSeleccionada === 1) {
  function golosinas() {
    let golosina = Number(
      prompt(
        "¿Qué golosina está buscando?\n1. Alfajores\n2. Caramelos\n3. Gomitas\n4. Chocolates"
      )
    );
    if (golosina < 1 || golosina > 4) {
      alert("El número que seleccionó no está dentro de las opciones. Por favor, inténtelo nuevamente.");
    } else {
      return golosina;
    }
  }

  let golosinaSeleccionada = golosinas();

  let cantidad = Number(prompt("Seleccione la cantidad que desee"));
  let monto = calculoMonto(golosinaSeleccionada, cantidad);
  alert("El monto a pagar es de: $" + monto);
} else if (opcionSeleccionada === 2) {
  function bebidas() {
    let bebida = Number(
      prompt("¿Qué bebida está buscando?\n5. Bebidas energéticas\n6. Agua\n7. Gaseosas\n8. Jugos")
    );
    if (bebida < 5 || bebida > 8) {
      alert("El número que seleccionó no está dentro de las opciones. Por favor, inténtelo nuevamente.");
    } else {
      return bebida;
    }
  }

  let bebidaSeleccionada = bebidas();

  let cantidad = Number(prompt("Seleccione la cantidad que desee"));
  let monto = calculoMonto(bebidaSeleccionada, cantidad);
  alert("El monto a pagar es de: $" + monto);
} else if (opcionSeleccionada === 3) {
  function cigarrillos() {
    let cigarrillo = Number(
      prompt(
        "¿Qué marca de cigarrillo está buscando?\n9. Marlboro\n10. Chesterfield\n11. Camel\n12. Lucky Strike"
      )
    );
    if (cigarrillo < 9 || cigarrillo > 12) {
      alert("El número que seleccionó no está dentro de las opciones. Por favor, inténtelo nuevamente.");
    } else {
      return cigarrillo;
    }
  }

  let cigarrilloSeleccionado = cigarrillos();

  let cantidad = Number(prompt("Seleccione la cantidad que desee"));
  let monto = calculoMonto(cigarrilloSeleccionado, cantidad);
  alert("El monto a pagar es de: $" + monto);
} else if (opcionSeleccionada === 4) {
  function cargarSUBE() {
    let sube = Number(prompt("Ingrese el monto que desea cargar a la SUBE:"));
    return sube;
  }
  let montoCargaSUBE = cargarSUBE();
  alert("Es correcto el monto de carga de SUBE $ " + montoCargaSUBE + " ? ");
}

function pago() {
  let metodoPago = prompt("¿Qué método de pago prefiere? \n1. Efectivo \n2. Mercado Pago \n3. Crédito/Débito");
  if (metodoPago === "1") {
    alert("Págale al vendedor, rata. ¡Muchas gracias por su compra!");
  } else if (metodoPago === "2") {
    alert("Pídale al vendedor el QR. ¡Muchas gracias por su compra!");
  } else if (metodoPago === "3") {
    alert("Pásele la tarjeta al vendedor. ¡Muchas gracias por su compra!");
  } else {
    alert("Opción no válida");
  }
}

pago();
