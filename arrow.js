// function doubleIt (num){
//     return num*2;
// }



// const doubleIt = function(num){
//     return num*2
// }

// single paramitar
const doubleIt = num =>num * 2;

// multiparamitar
const add = (x,y) => x + y;

// no paramitar
const give5 = () => 5;

// many paramitar
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const total = sum * diff;
    return total;
}

const result1 = add (60, 70);
const result = doubleIt(5);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);
