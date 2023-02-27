'use strict';

function BinarioADecimal(num) {
   num = num.split('')
   var suma = 0;
   for (var i = 0; i < num.length; i++){
      suma += Math.pow(2, num.length-1-i)*num[i]
   }
   return suma;
}

function DecimalABinario(num) {
   let binario = '';

   while (num > 0) {
      binario = (num % 2 ) + binario;
      num = Math.floor(num / 2);
}

return binario;

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
