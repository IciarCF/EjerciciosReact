import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};
type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
      const [light, setLight] = useState<TrafficLightColor>("red");
      const [countdown, setCountdown] = useState(5);
    useEffect(() => {
        //Creamos un intervalo que corre cada 1 segundo
        const intervalId = setInterval(() => {
        setCountdown((prev) => {
        //Si es mayor a 1 le restamos 1
        if (prev > 1) return prev - 1;
            //Cuando la cuenta llega a 1, cambiamos el color
            setLight((currentLight) => {
               if (currentLight == 'red') return 'yellow';
               if (currentLight == 'yellow') return 'green';
               
               return "red";
             });
             console.log(light);
             //Reiniciamos el contador
             return 5;
           });
         }, 1000);
        //Limpieamos al despontar o re-renderizamos
        return () => clearInterval(intervalId);
       }, [light]);

    return {
      //Props
      light,
      countdown,
      colors,

      //Computed
      percentage: (countdown / 5) * 100,
      greenLight: light === 'green'? colors.green: 'bg-gray-500',
      redLight: light === 'red'? colors.red: 'bg-gray-500',
      yellowLight: light === 'yellow'? colors.yellow: 'bg-gray-500'

      //Methods
    };


};
