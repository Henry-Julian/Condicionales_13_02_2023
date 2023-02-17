let num = Number(prompt("Usuario ingrese un numero entre 5 - 10, 15, 3"));
//(11<=10  &&  11>=5)  || (11==15 || 11 ==3) 
//(false && true)  || (false || false)
// false || false
// false
if((num<=10 && num>=5) || (num==15 || num==3) ){
    console.log(`Usuario el numero ${num} ingresado es el correcto `);
}else{
    console.error(`Usuario el numero ${num} ingresado es el incorrecto `);
}




// let num = Number(prompt("Usuario ingrese un numero entre 5 - 10"));

// if(num<=10){
//     if(num>=5){
//         console.log(`Usuario el numero ${num} ingresado es el correcto `);
//     }else{
//         console.error(`Usuario el numero ${num} ingresado es el incorrecto `);
//     }
// }else{
//     console.error(`Usuario el numero ${num} ingresado es el incorrecto `);
// }

