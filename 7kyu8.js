//Su objetivo en este kata es implementar una función de diferencia, que resta una lista de otra y devuelve el resultado.

//Debe eliminar todos los valores de la lista a, que están presentes en la lista b.

//arrayDiff ([1,2], [1]) == [2]

//Si un valor está presente en b, todas sus ocurrencias deben eliminarse de la otra:

//arrayDiff ([1,2,2,2,3], [2]) == [1,3]

function array_diff(a, b) {
    let difArray = []
  
    for ( let i = 0; i < a.length; i++) {
        let elem = a[i]
        if (b.indexOf(elem) === -1 ){
         difArray.push(elem)
        }
    }
    return difArray
  }
   array_diff([1,2],[1]) // [2]
  