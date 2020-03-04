//El equipo de marketing está pasando demasiado tiempo escribiendo hashtags.¡Ayudémoslos con nuestro propio generador de hashtags!

//Aquí está el trato:

//Debe comenzar con un hashtag (#).
//Todas las palabras deben tener su primera letra en mayúscula.
//Si el resultado final es más largo que 140 caracteres, debe devolver falso.
//Si la entrada o el resultado es una cadena vacía, debe devolver falso.


function generateHashtag (str) {
    var hashtag=str.replace(/\b[a-z]/g,function(s){return s.toUpperCase()}).replace(/\s+/g,'');
    console.log(hashtag.length);
    if(hashtag=='') return false;
    else if(hashtag.length>=140) return false;
    else return '#'+hashtag;
  }
  Big one: