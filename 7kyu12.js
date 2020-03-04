
//Hay una cola para las cajas de autoservicio en el supermercado. ¡Su tarea es escribir una función para calcular el tiempo total requerido para que todos los clientes salgan!

function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    console.log(w);
    for (let t of customers) {
      console.log(".........t: ", t);
      let idx = w.indexOf(Math.min(...w));
      console.log(":" ,Math.min(...w));
      console.log(idx);
      w[idx] += t;
      console.log("!!",w[idx]);
      
    }
    return Math.max(...w);
  }
  //console.log(queueTime([10,2,3,3], 2));//10
  console.log(queueTime([ 34, 14, 13, 40, 24, 2, 47, 11, 47, 38, 40, 34] ,5));//74
  //console.log(queueTime([ 1, 2, 3, 4, 5 ], 100));//5
  