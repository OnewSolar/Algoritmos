//Los números primos no están separados regularmente. Por ejemplo, de 2 a 3 la brecha es 1. De 3 a 5 la brecha es 2. De 7 a 11 es 4. Entre 2 y 50 tenemos los siguientes pares de primos de 2 lagunas: 3-5, 5-7 , 11-13, 17-19, 29-31, 41-43

//Un espacio primario de longitud n es una serie de n-1 números compuestos consecutivos entre dos números primos sucesivos (ver: http://mathworld.wolfram.com/PrimeGaps.html).

//Escribiremos una brecha de función con parámetros:

//g (entero> = 2) que indica la brecha que estamos buscando

//m (entero> 2) que da el inicio de la búsqueda (m inclusive)

//n (entero> = m) que da el final de la búsqueda (n inclusive)

//En el ejemplo anterior, el espacio (2, 3, 50) devolverá [3, 5] o (3, 5) o {3, 5}, que es el primer par entre 3 y 50 con un espacio de 2.

//Entonces, esta función debería devolver el primer par de dos números primos espaciados con un espacio de g entre los límites m, n si estos números existen de otra manera nulo o nulo o Ninguno o Nada (dependiendo del idioma).

//En C ++, devuelva en tal caso {0, 0}. En F # devuelve [||]. En Kotlin regreso []

//# Ejemplos: espacio (2, 5, 7) -> [5, 7] o (5, 7) o {5, 7}

//brecha (2, 5, 5) -> nulo. En C ++ {0, 0}. En F # [||]. En Kotlin regreso [] `

//brecha (4, 130, 200) -> [163, 167] o (163, 167) o {163, 167}

//([193, 197] también es un primo de 4 espacios entre 130 y 200, pero no es el primer par)

//brecha (6,100,110) -> nula o {0, 0}: entre 100 y 110 tenemos 101, 103, 107, 109 pero 101-107 no es una brecha de 6 porque hay 103 entre y 103-109 no es un 6- brecha porque hay 107in entre.



function gap(g, m, n) {
    var lastPrime = 0;
    var isPrime = function(x) { 
      for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
    }
    
    for(var i = m; i <= n; i++)
        if(isPrime(i)) {
            if(i - lastPrime == g) return [lastPrime, i];
            else lastPrime = i;
        }
      
    return null;
}
function gap(g, m, n) {
  for(let i = m; i<= n;i++){
    if(isPrime(i) && isPrime(i + g)){
      let arr = Array(g - 1).fill().map((item, index) => i + index + 1)
      if(arr.filter((item) => isPrime(item)).length > 0){
        continue;
      }else{
        return [i, i+g];
      }
    }
  }
  return null;
}

function isPrime(num){
  let mid = Math.ceil(Math.sqrt(num));
  for(let i = 2; i <= mid; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}