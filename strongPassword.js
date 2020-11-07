// Original answer below and optimized answer from hackerank above
function minimumNumber(n, password) {
    let c = 0;
    c += (password.match(/[0-9]/) || []).length;
    c += (password.match(/[a-z]/) || []).length;
    c += (password.match(/[A-Z]/) || []).length;
    c += (password.match(/[\!@#\$%^&\*\(\)\-\+]/) || []).length;
    return Math.max(4 - c, 6 - n);
}
// Complete the minimumNumber function below.
// function minimumNumber(n, password) {
//     let num = /[0-9]/g;
//     let numTest = num.test(password); 
//     let char = /[a-z]/g;
//     let charTest = char.test(password)
//     let charUp = /[A-Z]/g;
//     let charUpTest = charUp.test(password);
//     let special = /[!@#$%^&*()\-+]/g;   
//     let specialTest = special.test(password);

//     // Return the minimum number of characters to make the password strong
//     let count =0; 
//     if(!numTest) count++;
//     if(!charTest) count++;
//     if(!charUpTest) count++;
//     if(!specialTest) count++;
//      let ans = 6 - count; 

//     // if(count === 0 && n >= 6) return 0 ;
//     // if(count ===0 && n < 6) return 6-n; 
//     // if(count > 0 && n + count >= 6) return count; 
//     // if(count > 0 && n < 6) return 6- (count +n) + count;
//     return Math.max(4-count, n-6 )

// }