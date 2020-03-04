//Dada una matriz, encuentre el número entero que aparece un número impar de veces.

//Siempre habrá un número entero que aparece un número impar de veces.

function findOdd(numbers) {
    var count = 0;
    for(var i = 0; i<numbers.length; i++){
      for(var j = 0; j<numbers.length; j++){
        if(numbers[i] == numbers[j]){
          count++;
        }
      }
      if(count % 2 != 0 ){
        return numbers[i];
      }
    }
  };