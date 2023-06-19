/*
function calcularMonto(lts, combus) {
  let monto = 0;
  if (combus === 1) {
    monto = lts * vibraniums;
  }

  if (combus === 2) {
    monto = lts * paladiumi;
  }

  if (combus === 3) {
    monto = lts * cryptonid;
  }

  if (combus === 4) {
    monto = lts * alamantiumud;
  }

  if (combus === 5) {
    monto = lts * galliongo;
  }
  return monto;
}

function pagoEfectivo() {
  let efect = confirm(
    "Desea pagar con efectivo? Seleccione ACEPTAR para pagar con efectivo."
  );
  return efect;
}

function pagoTarjeta() {
  let tarje = confirm(
    "Desea pagar con targeta? Si ya selecciono el metodo por efectivo, oprima CANCELAR."
  );
  return tarje;
}

let operacion = ingresarOpcion();

if (!isNaN(operacion)) {
  if (operacion != 2) {
    let combustible = ingresarCombustible();
    let litros = ingresarLitros();
    let monto = calcularMonto(litros, combustible);

    alert("Su monto total a pagar es de: " + monto);

    let efectivo = pagoEfectivo();
    let tarjeta = pagoTarjeta();

    if (efectivo) {
      let saldo = Number(prompt("Ingrese su saldo"));
      if (saldo > monto) {
        alert("Pago realizado con exito!");
      } else if (saldo < monto) {
        alert(
          "Saldo insuficiente! Debera pagar con targeta de credito o debito. El pago se realizara de forma instantanea."
        );
        tarjeta = true;
      }
    }

    if (tarjeta) {
      for (i = 0; i < 3; i++) {
        let contrasenia = Number(
          prompt("Ingrese su DNI que tenga registrado en las tarjetas:")
        );
        if (contrasenia === 12345) {
          let targetadoc = confirm(
            "Oprima ACEPTAR para pagar con debito u oprima CANCELAR para pagar con credito"
          );
          if (targetadoc) {
            let saldo = Number(
              prompt("Ingrese el saldo de la tarjeta de debito")
            );
            if (saldo > monto) {
              alert("Pago realizado con exito!");
              break;
            } else if (saldo < monto) {
              alert(
                "Saldo insuficiente! Debera pagar con targeta de credito. El pago se realizara de forma instantanea. Gracias por confiar en nosotros!"
              );
              targetadoc = false;
              break;
            }
          } else if (!targetadoc) {
            alert("El pago se realizara de forma instantanea.");
            alert("Pago realizado con exito. Gracias por confiar en nosotros!");
            break;
          }
        } else {
          alert(
            "Contrasenia incorrecta. Le quedan: " + (2 - [i]) + " intentos"
          );
        }
      }
    }
  } else {
    alert("Buen viaje y esperamos tenerlo por aqui nuevamente!");
  }
} else {
  alert("INGRESE UN NUMERO VALIDO. OPERACION FINALIZADA.");
}

alert("Buen viaje y esperamos tenerlo por aqui nuevamente!");

*/

const alfajores = 250
const caramelos = 10
const gomitas = 100
const chocolates = 150
const energetica = 400
const agua = 120
const gaseosa = 280
const jugo = 170
const marlboro = 500
const camel = 600
const chesterfield = 300
const lucky = 450

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
    monto = cantidad * marlboro
    break;
    case 10: 
    monto = cantidad * camel
    break;
    case 11: 
    monto = cantidad * chesterfield
    break;
    case 12: 
    monto = cantidad * lucky
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
      "Bienvenido a MANI KIOSKITO! Presione lo que necesite para continuar\n1. Comprar golosinas\n2. Comprar bebidas\n3. Comprar cigarrillos\n4. Cargar SUBE"
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
  alert("El monto a pagar es de: " + monto);


} else if (opcionSeleccionada === 2) {
  function bebidas() {
    let bebida = Number(
      prompt("¿Qué bebida está buscando?\n1. Bebidas energéticas\n2. Agua\n3. Gaseosas\n4. Jugos")
    );
    if (bebida < 1 || bebida > 4) {
      alert("El número que seleccionó no está dentro de las opciones. Por favor, inténtelo nuevamente.");
    } else {
      return bebida;
    }
  }

  let bebidaSeleccionada = bebidas();

  let cantidad = Number(prompt("Seleccione la cantidad que desee"));
  let monto = calculoMonto(bebidaSeleccionada, cantidad);
  alert("El monto a pagar es de: " + monto);


} else if (opcionSeleccionada === 3) {
  function cigarrillos() {
    let cigarrillo = Number(
      prompt(
        "¿Qué marca de cigarrillo está buscando?\n1. Marlboro\n2. Chesterfield\n3. Camel\n4. Lucky Strike"
      )
    );
    if (cigarrillo < 1 || cigarrillo > 4) {
      alert("El número que seleccionó no está dentro de las opciones. Por favor, inténtelo nuevamente.");
    } else {
      return cigarrillo;
    }
  }

  let cigarrilloSeleccionado = cigarrillos();
 
  let cantidad = Number(prompt("Seleccione la cantidad que desee"));
  let monto = calculoMonto(cigarrilloSeleccionada, cantidad);
  alert("El monto a pagar es de: " + monto);

} else if (opcionSeleccionada === 4) {
  function cargarSUBE() {
    let sube = Number(prompt("Ingrese el monto que desea cargar a la SUBE:"));
    return sube;
  }

  let montoCargaSUBE = cargarSUBE();
  alert("Es correcto el monto de carga de SUBE: ", montoCargaSUBE " ?");
}

