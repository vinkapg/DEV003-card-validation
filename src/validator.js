 const validator = {
     isValid: (numberCard)=>{
  //Algoritmo de lunh 

 // tomar los numeros en posición impar
             //tome el string y lo convierta en número, adicional que me de la posición y lo reverse
 // reverse.parseInt.indexOf(numberCard) 
//  function digitosNumberCard()
let longitud = numberCard.lenght //serviría para determinar la longitud del número

 // multiplicar por 2 los números en posición impar
 
 for (let i = 0; i < longitud; i += 2){ //ver si i.lenght = 16 esta bien planteado y si el razonamiento 
    



    
 }
    
 // sumar los que tengas mas de 2 digitos para transformarlos en 1 solo digito o restarles 9

 // sumar todas las posiciones del número

 // aplicar módulo de 10 (%) para que me de el residuo de la división 
 // una vez resuelto se debe dar una condición, si (if) residuo es 0 debe aparecer una alerta 
 // de numerotarjetavalido y si no (else) debe indicar que el numero de tarjeta es invalido
 // return fx es dar fin a la función y devolver un valor 
 if(resultado%10 === 0){
    return true
 }else{
     return false 
 }
     },
    Maskify: ()=>{

    } 

}; // const validator >> es para exportar la información a index.js 

export default validator;

 /* //función para separar digitos
  isValid: function(cardNumber){
    let arregloTarjeta = [];
    for (var j= 0; j< cardNumber.length; j++) {
        
        arregloTarjeta = parseInt(cardNumber[j]);
        console.log(arregloTarjeta)
    }}
};*/
