"use scrit"

let tieneCuenta = prompt("¿Tienes una cuenta? (sí/no)");

let conoceContraseña = prompt("¿Conoces la contraseña? (sí/no)");

if (tieneCuenta === "sí" && conoceContraseña === "sí") {
    alert("Acceso concedido");
} else {
    alert("Acceso denegado");
}
