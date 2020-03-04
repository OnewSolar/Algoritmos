//Se le dará una serie de enteros. Su trabajo es tomar esa matriz y encontrar un índice N donde la suma de los enteros a la izquierda de N sea igual a la suma de los enteros a la derecha de N. Si no hay un índice que haga que esto suceda, regrese - 1)

//Por ejemplo:

//Digamos que se le da la matriz {1,2,3,4,3,2,1}:Su función devolverá el índice 3, porque en la tercera posición de la matriz, la suma del lado izquierdo del índice ({1,2,3}) y la suma del lado derecho del índice ({3,2, 1}) ambos equivalen a 6.

//Miremos otro.Se le da la matriz {1,100,50, -51,1,1}:Su función devolverá el índice 1, porque en la primera posición de la matriz, la suma del lado izquierdo del índice ({1}) y la suma del lado derecho del índice ({50, -51,1,1 }) ambos son iguales a 1.

//El último:Se le da la matriz {20,10, -80,10,10,15,35}En el índice 0, el lado izquierdo es {}El lado derecho es {10, -80,10,10,15,35}Ambos son iguales a 0 cuando se agregan. (Las matrices vacías son iguales a 0 en este problema)El índice 0 es el lugar donde el lado izquierdo y el lado derecho son iguales.

//Nota: Recuerde que en la mayoría de los lenguajes de programación / scripting el índice de una matriz comienza en 0.

//Entrada:
//Un conjunto entero de longitud 0 <arr <1000. Los números en el conjunto pueden ser cualquier número entero positivo o negativo.

//Salida:
//El índice más bajo N donde el lado a la izquierda de N es igual al lado a la derecha de N. Si no encuentra un índice que se ajuste a estas reglas, devolverá -1.

//Nota:
//Si recibe una matriz con múltiples respuestas, devuelva el índice correcto más bajo.

function findEvenIndex(arr) {
    var sum = 0,
      leftSum = 0;
  
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    for (var i = 0; i < arr.length; i++) {
      sum -= arr[i];
  
      if (leftSum === sum) {
        return i;
      }
  
      leftSum += arr[i];
    }
  
    return -1;
  }