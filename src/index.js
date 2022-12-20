import validator from './validator.js';
//Nombre de la tarjeta
const casillaNombre = document.querySelector(".card_details_name"); //me permite seleccionar/posicionar el nombre de la tarjeta para trabajar en él
const asociarInput1 = document.querySelector("#cardName"); //me asocia el id del input en donde se ingresara el nombre
/*const errorDiv1 = document.querySelector(".formInput_cardName_error");*/ //asocia class del error para el input del nameCard
//.addEventListener -> esto escucha constantemente lo que el usuario ingresa
//se agrega un "evento" que se llama input, este se actualiza contantemente, letra por letra.
asociarInput1.addEventListener("input", () => {
  if (asociarInput1.value === " ") {
    casillaNombre.innerText = "Francisco Urra";
  } else {
    casillaNombre.innerText = asociarInput1.value;
  }
});

//Número de la tarjeta
const numeroTarjeta = document.querySelector(".card_number");
const asociarInput2 = document.querySelector("#cardNumber");
// const numeroMichis = validator.maskify(asociarInput2.value);
//   document.getElementById("cardNumber").value = numeroMichis
/*const errorDiv2 = document.querySelector(".formInput_cardNumber_error");*/

asociarInput2.addEventListener("input", () => {
  if (asociarInput2.value === " ") {
    numeroTarjeta.innerText = "0000 0000 0000 0000";
  } else {
    numeroTarjeta.innerText = asociarInput2.value;
  }
});


//Mes de expiración
const boxMonth = document.querySelector(".card_month");
const asociarInput3 = document.querySelector("#cardMonth");
/*const errorDiv3 = document.querySelector(".formInput_mm_error");*/

asociarInput3.addEventListener("input", () => {
  if (asociarInput3.value === " ") {
    boxMonth.innerText = "00";
  } else {
    boxMonth.innerText = asociarInput3.value;
  }
});

//Años de expiración
const boxYear = document.querySelector(".card_year");
const asociarInput4 = document.querySelector("#cardYear");
/*const errorDiv4 = document.querySelector(".formInput_aa_error");*/

asociarInput4.addEventListener("input", () => {
  if (asociarInput4.value === " ") {
    boxYear.innerText = "00";
  } else {
    boxYear.innerText = asociarInput4.value;
  }
});

const boxCvc = document.querySelector(".card_back_cvc");
const asociarInput5 = document.querySelector("#cardCVC");
/*const errorDiv5 = document.querySelector(".formInput_cvc_error");*/

asociarInput5.addEventListener("input", () => {
  if (asociarInput5.value === " ") {
    boxCvc.innerText = "000";
  } else {
    boxCvc.innerText = asociarInput5.value;
  }
});

//tomar los números que el usuario ingresa 
// let boxNum = document.querySelector(".card_number");
// let validarNum = document.querySelector("#cardNumber");

// validarNum.addEventListener("elemento", ()=>{
//     console.log("tengo el valor")
// })

// let datoValidar = validarNum;
// if(Number.isInteger(datoValidar)) {
//   console.log('La variable es entera');
// }
// document.getElementById("cardNumber").keyBoardEvent("keyup", mascaraNum);

// function mascaraNum(){
//   const numRegistro1 = document.getElementById("cardNumber").value;
//   const numeroMichis = validator.maskify(numRegistro1);
//   document.getElementById("cardNumber").value = numeroMichis
// }

document.getElementById("botonValidar").addEventListener("click", numberToValidation);

function numberToValidation(event) {
  event.preventDefault(); //prohibe que se recargue la pagina para que se ejecute la fx
  const numRegistro = document.getElementById("cardNumber").value;
  const numeroMichis = validator.maskify(numRegistro);
  document.getElementById("cardNumber").value = numeroMichis

  if (numRegistro.length <= 16) {
    const valido = validator.isValid(numRegistro);  
    if(valido===true){
      document.getElementById("cambioTarjetaValida").style.display = "block";
      document.querySelector(".main-container__form_section").style.display = "none";
      document.getElementById("numTarjeta").innerHTML = numeroMichis;
    }
    if(valido===false){
      document.getElementById("cambioTarjetaInvalida").style.display = "block";
      document.querySelector(".main-container__form_section").style.display = "none";
      document.getElementById("numTarjetaInc").innerHTML = numeroMichis;
    }
  }

}






/*al dar clic tome la función del validator.js*/
// function validatorCard(){

// let cardNumberBox = document.getElementById("cardNumber").value;
// let boton = document.getElementById("boton");

// boton.addEventListener ("click", function(){
//     console.log(validator.isValid(cardNumberBox))
//  });
// }