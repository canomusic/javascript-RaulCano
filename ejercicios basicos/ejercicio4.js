// Array inicial
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Mostrar "Tendo" por su posición (índice 3)
console.log(aldeanos[3]);

// 4.2 - Añadir "Cervasio" al final
aldeanos.push("Cervasio");

// 4.3 - Cambiar el primer elemento por "Bambina"
aldeanos[0] = "Bambina";

// 4.4 - Darle la vuelta al array
aldeanos.reverse();

// 4.5 - Cambiar "Narciso" por "Canela" usando un método de array
const indexNarciso = aldeanos.indexOf("Narciso");
if (indexNarciso !== -1) {
  aldeanos.splice(indexNarciso, 1, "Canela");
}

// 4.6 - Imprimir el último elemento sin usar la posición directamente
console.log(aldeanos[aldeanos.length - 1]);
