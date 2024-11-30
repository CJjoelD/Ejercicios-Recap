"use scrit"

const calcularIVA = (precio) => {
    const iva = precio * 0.12;  // 
    const precioTotal = precio + iva;  
    alert("El precio total con IVA es: " + precioTotal); 
};

calcularIVA(50); 
