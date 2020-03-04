//Construir la torre
//Construye Torre con el siguiente argumento dado:
//Número de pisos (entero y siempre mayor que 0).

//El bloque de la torre se representa como *

//Python: devuelve una lista;
//JavaScript: devuelve una matriz;
//C #: devuelve una cadena [];
//PHP: devuelve una matriz;
//C ++: devuelve un vector <cadena>;
//Haskell: devuelve una [Cadena];
//Ruby: devuelve una matriz;

function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
    + "*".repeat((i * 2)+ 1)
    + " ".repeat(nFloors - i - 1))
    }
    return tower;
    }
    console.log(towerBuilder(5));