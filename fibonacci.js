//Fibonacci (5) Sequence 

// function fibanaci(n) {
//     if (n <= 2) return 1;
//      return fibanaci(n - 1) + fibanaci(n - 2);
//     // return arr; 
// }

// refactored solution 
// TOP DOWN APPROACH!
function fibanaciDynamic(n, memo=[0,1,1]) {
    //    if(n <=2) return 1; 
    if(memo[n]!== undefined) return memo[n];
   let res = fibanaciDynamic(n-1,memo) + fibanaciDynamic(n-2,memo);
   memo[n] = res;  
   return res; 
}

console.log(fibanaciDynamic(30));

// BOTTOM DOWN APPROACH! - TABULATION
// Use a loop and start at the bottom of the smallest sub problem
// Store these results in an array and loop > forward 
// >>>>>until we arrive to the number we need to get to

// function fibanaciTabulation(n) {
//     if(n <=2) return 1; 
//     let fibNums = [0,1,2];
//     for(let i =3 ; i <= n; i++) {
//         fibNums[i] = fibanaciTabulation(i-2) + fibanaciTabulation(i-1);
//     }
//     return fibNums[n];
// }

// console.log(fibanaciTabulation(10));