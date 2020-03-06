//Escriba una función llamada que tome una cadena de paréntesis y determine si el orden de los paréntesis es válido. La función debe devolver verdadero si la cadena es válida, y falso si no es válida.

//Ejemplos
//"()" => verdadero
//") (()))" => falso
//"(" => falso
//"(()) ((() ()) ())" => verdadero
//Restricciones
//0 <= input.length <= 100

function validParentheses(parens){
    
    var length = parens.length / 2;
    
    for (var i = 0; i <= length; ++i) {
      parens = parens.replace('()', '');
    }
    
    return parens == '';