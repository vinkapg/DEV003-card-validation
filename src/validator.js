const validator = {
  isValid: (numberCard) => {
    //Algoritmo-de-lunh
    // tomar los numeros en posición impar
    const longitud = numberCard.lenght //serviría para determinar la longitud del número
    let digitoImpar = ""
    let digitoPar = ""
    let nuevoDigitoImpar = ""
    
    for (let i = 0; i < longitud; i += 2) {  //se puede escribir i < numberCard.lenght
      if (i % 2 === 0) {
        // multiplicar por 2 los números en posición impar
        //tome el string y lo convierta en número
        digitoImpar = parseInt(i) * 2;
      } else{
        digitoPar = parseInt(i);
      }
      // sumar los que tengas mas de 2 digitos para transformarlos en 1 solo digito o restarles 9
      if (digitoImpar.lenght = 2) {
        nuevoDigitoImpar = digitoImpar - 9;
      }
      // sumar todas las posiciones del número
      let resultado = ""
      resultado = nuevoDigitoImpar + digitoPar
      // aplicar módulo de 10 (%) para que me de el residuo de la división 
      // una vez resuelto se debe dar una condición, si (if) residuo es 0 debe aparecer una alerta 
      // de numerotarjetavalido y si no (else) debe indicar que el numero de tarjeta es invalido
      // return fx es dar fin a la función y devolver un valor 
      if (resultado % 10 === 0) {
        return true
      } else {
        return false
      }}
  },
  maskify: (numberCardMask) => {  //esta función debe retornar un string donde todos 
    //menos los últimos cuatro caracteres sean reemplazados por un numeral (#) o 🐱. 
    //Esta función deberá siempre mantener los últimos cuatro caracteres intactos, 
    //aún cuando el string sea de menor longitud.
    numberCardMask = numberCardMask.toString()
    let resultadoMask = "" // decía "error  'resultado' is not defined" antes de poner const
    for (i = 0; i < numberCardMask.lenght; i++)
      if(i<4){
        resultadoMask = resultadoMask + numberCardMask(i)
      }else{
        resultadoMask = resultadoMask + "#"
      }
  }
} // const validator >> es para exportar la información a index.js 

export default validator;

