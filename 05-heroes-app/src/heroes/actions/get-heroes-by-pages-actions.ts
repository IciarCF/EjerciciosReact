import { heroApi } from "../api/hero.api"
import type { HeroesRespones } from "../types/get-heroes.response";

const BASE_URL = import.meta.env.VITE_API_URL;
export const getHeroesByPageActions = async(): Promise<HeroesRespones> =>{
    const {data} = await heroApi.get<HeroesRespones>(`/`);
    console.log({data})

    const heroes = data.heroes.map(hero => ({
        ...hero,
        image: `${ BASE_URL}/images/${hero.image}`
    }))

    return {
        ...data,
        heroes: heroes


    }
}