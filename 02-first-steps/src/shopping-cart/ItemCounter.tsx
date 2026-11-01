import { useState } from "react";


//import './ItemCounter.css';
import style from "./ItemCounter.module.css";

interface Props{
    name: string;
    quantity?:number;
}

export const ItemCounter = ({name, quantity = 0}:Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () =>{
    setCount(count + 1);
  }

  const handleSubtract = () =>{
    if (count == 0) return;
    setCount(count - 1);
  }

  return (
    <section className = {style['item-row']}>
        <span className = {style['text-item']} style={{color: count == 0 ? 'red' : 'black'}}>{name}</span>
        <button  onClick={handleAdd}>+1</button>
        <span>{count}</span>
        <button onClick={handleSubtract}>-1</button>
    </section>
  )
};

 