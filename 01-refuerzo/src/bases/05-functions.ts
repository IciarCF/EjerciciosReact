
function greet (name:string): string{
    return `Hola ${name}`;
}

const greet2 = (name:string): string => `Hola ${name}`;


const message = greet('Goku');
const mesagge2 = greet2('Vegeta');

console.log(message, mesagge2);


function getUser(){
    return{
        uid: 'ABC-123',
        username: 'El_Papi23'
    };
}

const getUser2 = () => ({
        uid:'DEF-456',
        username:'Ichi'
    });


const user = getUser();
const user2 = getUser2();
console.log(user , user2);

//Uso de funciones flecha

const myNumbers: number[] = [1,2,3,4,5];

/* myNumbers.forEach(function(value){
    console.log({value});
}) */

//El codigo anterior se puede simplificar a 
/* myNumbers.forEach((value) => {
    console.log({value});
}); */

//Esto se puede simplificar mas
myNumbers.forEach(console.log)