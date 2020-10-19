class Parent{
    constructor(){
        this.fatherName = 'schwerznegger';
    }
}



class child extends Parent{
    
    constructor(name){
        super();
        this.name = name
    }
}

const baby = new child ('ananta')
const  baby1 = new child('tom')
console.log (baby, baby1);









// class child{
//     constructor(name){
//         this.name = name
//     }
// }

// const baby = new child ('ananta')
// console.log (baby);