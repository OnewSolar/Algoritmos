//Considere una secuencia u donde u se define de la siguiente manera:

//El número u (0) = 1 es el primero en u.
//Para cada x en u, entonces y = 2 * x + 1 y z = 3 * x + 1 también deben estar en u.
//No hay otros números en ti.
//Ej: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

//1 da 3 y 4, luego 3 da 7 y 10, 4 da 9 y 13, luego 7 da 15 y 22 y así sucesivamente ...

//Tarea:
//Dado el parámetro n, la función dbl_linear (o dblLinear ...) devuelve el elemento u (n) de la secuencia ordenada (con <) u (por lo tanto, no hay duplicados).

function dblLinear(n) {
    let u = [1], x = 0, y = 0
    for (let i = 0; i < n; i++) {
        let nextX = 2 * u[x] + 1, nextY = 3 * u[y] + 1
        if (nextX <= nextY) {
            u.push(nextX)
            x++
            if (nextX == nextY)
                y++
        } else {
            u.push(nextY)
            y++
        }
    }
    return u[n]
}

console.log(dblLinear(10) + " = " + 22)
console.log(dblLinear(20) + " = " + 57)
console.log(dblLinear(30) + " = " + 91)
console.log(dblLinear(50) + " = " + 175)
console.log(dblLinear(100) + " = " + 447)