let num = Number(prompt("Señor usuario por favor ingrese su edad"));


switch (true) {
    case num<=18:
        console.log("El usuario es menor de edad");
        
        break;
    
    case num>=18 && num<=101:
        console.log("El usuario es mayor de edad");

        break;

    default:
        console.log("La edad ingresada no cumple con los parámetros");

        break;
}

