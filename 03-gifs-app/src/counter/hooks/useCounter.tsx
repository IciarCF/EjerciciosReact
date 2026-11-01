import  { useState } from 'react'
/**
 * Custom hook para gestionar las diferentes operaciones de la aplicacion
 * @param initiaLValue valor inicial en caso de no recibir ninguno
 * @returns 
 */


export const useCounter = (initiaLValue: number = 10) => {
    const [counter, setCounter] = useState(initiaLValue);
    //Umentamos el contador en 1
    const handleAdd = () => {
      setCounter(counter + 1);
    };
    //Reducimos el contador en 1
    const handleSubstract = () => {
      setCounter((prevState) => prevState - 1);
    };
    //Reiniciamos el contador
    const handleReset = () => {
      setCounter(initiaLValue);
    };
    //Devolvemos un objeto, con el valor y las diferentes funciones
    return {
        //Values
        counter,
        //Methods / Actions
        handleAdd,
        handleSubstract,
        handleReset
    }
}
