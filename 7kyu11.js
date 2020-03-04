//Tienes una serie de números.Su tarea es ordenar los números impares ascendentes, pero los números pares deben estar en su lugar.

//Cero no es un número impar y no necesita moverlo. Si tiene una matriz vacía, debe devolverla.

//Ejemplo

//sortArray ([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {

    var odd = array.filter(is_odd).sort(ascending);
    return array.map(replace_odd_inorder);
  
  
    function ascending(a, b) {
  
      return a > b;
    }
  
    function is_odd(num) {
  
      return num % 2;
    }
  
    function replace_odd_inorder(num) {
  
      return is_odd(num) ? odd.shift() : num;
    }
  }