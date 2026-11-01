const person = {
    name: 'Tony',
    age: 45,
    key:'Ironman'
};

const {name:ironmanName, age, key} = person;
/* const name = person.name;
const age = person.age;
const key = person.key; */

console.log({name:ironmanName, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string
}

const useContext = ({name, age, key, rank}:Hero ) =>{
    return {
        keyName: key,
        user:{
            name,
            age
        },
        rank: rank
    }
}

const {rank, keyName, user } = useContext(person);

const {name} = user;

console.log({rank, keyName, name});
