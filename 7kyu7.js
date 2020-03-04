//Haga un programa que filtre una lista de cadenas y devuelva una lista con solo el nombre de sus amigos.

//Si un nombre tiene exactamente 4 letras, ¡puede estar seguro de que debe ser un amigo suyo! De lo contrario, puedes estar seguro de que él no ...

//Ej: Entrada = ["Ryan", "Kieran", "Jason", "Yous"], Salida = ["Ryan", "Yous"]

//es decir

//amigo ["Ryan", "Kieran", "Mark"] `shouldBe` [" Ryan "," Mark "]

function friend(friends){
    return friends.filter(el => el.length === 4);
  }