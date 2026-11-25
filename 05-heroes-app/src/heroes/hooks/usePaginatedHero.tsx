import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageActions } from "../actions/get-heroes-by-pages-actions";



export const usePaginatedHero =  (page:number, limit:number) => {
  return useQuery({
    queryKey: ["herores", { page, limit }],
    queryFn: () => getHeroesByPageActions(page, limit),
    staleTime: 1000 * 60 * 5, //5 min
  });
}
