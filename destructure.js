const person = { name: 'william', age:'22', wife: 'Ema Watson', address: 'kochu khet', phone: '0171229966', friends:'leya', job:'facebook'}


const complexObject = {
    name :'bristy',
    info: {
        address: 'tongi, murkun',
        leader:'tiger leader',
    }
}

const{leader} = complexObject.info;

console.log(leader);



const { phone } = person;
console.log(phone)

const wife = person.wife
console.log(wife, phone)



const friends = ['sakib khan', 'salman khan', 'Arman khan', 'Amir khan', 'sarukh khan']
const [cotoFriend, ...older] = friends;
console.log(cotoFriend, older)

