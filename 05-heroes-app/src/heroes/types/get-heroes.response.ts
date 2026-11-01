import type { Hero } from "./hero.interface";

export interface HeroesRespones {
    total:  number;
    pages:  number;
    heroes: Hero[];
}

