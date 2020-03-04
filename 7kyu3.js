
//Multiples of 3 and 5
function solution(number){
    let multiples = [];
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 && i % 5 === 0 || i % 5 === 0 || i % 3 === 0) {
        multiples.push(i);
    
    }
  
    return multiples.reduce(((total, num) => total += num), 0);
  }
  
  console.log(solution(10));