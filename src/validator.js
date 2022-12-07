const validator = {
  // ...
};

export default validator;

function validatorCard(){
  var CardNumber = document.getElementById("cardNumber").value;
  let arregloTarjeta = [];
  for (var j= 0; j< CardNumber.length; j++) {
      
      arregloTarjeta = parseInt(CardNumber[j]);
      console.log(arregloTarjeta)
  }}
