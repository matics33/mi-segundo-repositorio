/*
var funcion = function () { };

var numero1 = 8
var numero2 = 10

var numero3 = 5
var numero4 = 9

console.log(numero1 + numero2);
console.log(numero3 + numero4) 
hasta aqui es una manera de hacer esta operacion*/

/*la siguiente es la manera mejorada*/
/*
var numero1 = 8
var numero2 = 10

var numero3 = 5
var numero4 = 9


function suma() {
    console.log(numero1 + numero2);
    console.log(numero3 + numero4);

};

console.log(suma());

siguiente operacion pasando numero 1 y numero 2 como un paramentro*/

var funcion = function () { };

function suma(numero1, numero2) {
    console.log(numero1 + numero2);
};

console.log(suma(240, 820));
console.log(suma(112, 898));
console.log(suma(740, 260));
console.log(suma(425, 575));

// mejor manera de hacer esta operacion //