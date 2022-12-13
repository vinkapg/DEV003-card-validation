import validator from './validator.js';
//Nombre de la tarjeta
let casillaNombre = document.querySelector(".card_details_name"); //me permite seleccionar/posicionar el nombre de la tarjeta para trabajar en él
let asociarInput1 = document.querySelector("#cardName"); //me asocia el id del input en donde se ingresara el nombre
let errorDiv1 = document.querySelector(".formInput_cardName_error"); //asocia class del error para el input del nameCard
//.addEventListener -> esto escucha constantemente lo que el usuario ingresa
    //se agrega un "evento" que se llama input, este se actualiza contantemente, letra por letra.
asociarInput1.addEventListener("input", ()=>{
        if(asociarInput1.value == " "){
            casillaNombre.innerText = "Francisco Urra";
        }else{
            casillaNombre.innerText = asociarInput1.value;
        }
});

//Número de la tarjeta
let numeroTarjeta = document.querySelector(".card_number");
let asociarInput2 = document.querySelector("#cardNumber");
let errorDiv2 = document.querySelector(".formInput_cardNumber_error");

asociarInput2.addEventListener("input", ()=>{
    if(asociarInput2.value == " "){
        numeroTarjeta.innerText = "0000 0000 0000 0000";
    }else{
        numeroTarjeta.innerText = asociarInput2.value;
    }
});

//Mes de expiración
let boxMonth = document.querySelector(".card_month");
let asociarInput3 = document.querySelector("#cardMonth");
let errorDiv3 = document.querySelector(".formInput_mm_error");

asociarInput3.addEventListener("input", ()=>{
    if(asociarInput3.value == " "){
        boxMonth.innerText = "00";
    }else{
        boxMonth.innerText = asociarInput3.value;
    }
});

//Años de expiración
let boxYear = document.querySelector(".card_year");
let asociarInput4 = document.querySelector("#cardYear");
let errorDiv4 = document.querySelector(".formInput_aa_error");

asociarInput4.addEventListener("input", ()=>{
    if(asociarInput4.value == " "){
        boxYear.innerText = "00";
    }else{
        boxYear.innerText = asociarInput4.value;
    }
});

let boxCvc = document.querySelector(".card_back_cvc");
let asociarInput5 = document.querySelector("#cardCVC");
let errorDiv5 = document.querySelector(".formInput_cvc_error");

asociarInput5.addEventListener("input", ()=>{
    if(asociarInput5.value == " "){
        boxCvc.innerText = "000";
    }else{
        boxCvc.innerText = asociarInput5.value;
    }
});

//tomar los números que el usuario ingresa 
let boxNum = document.querySelector(".card_number");
let validarNum = document.querySelector("#cardNumber");

// validarNum.addEventListener("elemento", ()=>{
//     console.log("tengo el valor")
// })

let datoValidar = validarNum;
if(Number.isInteger(datoValidar)) {
  console.log('La variable es entera');
}

/*al dar clic tome la función del validator.js*/
// function validatorCard(){

// let cardNumberBox = document.getElementById("cardNumber").value;
// let boton = document.getElementById("boton");

// boton.addEventListener ("click", function(){
//     console.log(validator.isValid(cardNumberBox))
//  });
// }