//Eliminar las ocurrencias de un elemento si ocurre más de n veces

function deleteNth(arr,x) {
    //Define a cache object;
      var cache = {};
      return arr.filter(function(n) {
      //The filter() method creates an array filled with all array elements that pass a test (provided as a function)//////
        cache[n] = (cache[n]||0) + 1;
      //The function returns every array element that is equal or smaller than x//////
        return cache[n] <= x;
      });
    }