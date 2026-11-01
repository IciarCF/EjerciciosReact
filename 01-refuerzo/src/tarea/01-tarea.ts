function useState(name1:string){
    return [name1,
         (name:string) => {
            console.log(name);
            }
        ] as const
}

const[name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');

