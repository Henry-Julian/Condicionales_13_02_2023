let num = Number(prompt("Por favor ingrese su edad"));


if (num>=18){
    console.log(`El usuario es mayor de edad porque indicó tener ${num} años.`);
}else{
    console.error(`La edad ingresada no cumple con los parámetros ya que el usuario indicó tener ${num} años.`);
}

