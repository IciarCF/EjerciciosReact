import {heroes, Owner, type Hero} from '../data/heroes.data.ts';

const getHeroById = (id:number): Hero | undefined=>{
   const hero = heroes.find((hero) => {
    return hero.id === id;
   }); 

   /* if(!hero){
    throw new Error(`No existe un heroe con el id ${id}`)
   } */
   return hero;
}

//Tarea
/**
 * getHeroesByOwner ==> Hero[]
 * Filtra héroes por su propietario
 * @param Owner - El propietario por el cual filtrar (DC o Marvel). Se trata de un enum
 * @returns Array de heroes perteneciente a al propietario enviado
 */

export const getHeroesByOwner = (owner: Owner) : Hero[] | undefined => {
   const heroFilterList = heroes.filter((hero) => {
      return hero.owner === owner
   });

 
   return heroFilterList;
}