//Por lo general, cuando compra algo, se le pregunta si su número de tarjeta de crédito, número de teléfono o respuesta a su pregunta más secreta sigue siendo correcta. Sin embargo, dado que alguien podría mirar por encima de tu hombro, no quieres que se muestre en tu pantalla. En cambio, lo enmascaramos.

//Su tarea es escribir una función enmascarar, que cambia todos menos los últimos cuatro caracteres a '#'.

//Ejemplos
//maskify ("4556364607935616") == "############ 5616"
//maskify ("64607935616") == "####### 5616"
//maskify ("1") == "1"
//maskify ("") == ""

// "¿Cuál era el nombre de tu primera mascota?"
//maskify ("Skippy") == "## ippy"
//maskify ("Nananananananananananananananana Batman!") == "########


function maskify(cc) {
    return cc.replace(/.(?=.{4,}$)/g, '#');
  }