import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useMemo} from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";
import { getHeroesByPageActions } from "@/heroes/actions/get-heroes-by-pages-actions";
import {  useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";


export const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  console.log({searchParams})

  const activeTab = searchParams.get('tab') ?? 'all';
  const selectedTab = useMemo(() =>{
    const validTabs = ["all" , "favorites" , "heroes" , "villains"];
    return validTabs.includes(activeTab) ? activeTab: 'all'
  },[activeTab])
  

  
  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageActions(),
    staleTime: 1000 * 60 * 5 //5 min
  })

  console.log({heroesResponse});

  return (
    <>
      {/*Header*/}
      <CustomJumbotron
        title="Universo de Superhéroes"
        description="Descrubre, explora y administra heroes y villanos"
      />
      {/*Custom breadCrumbs*/}
      <CustomBreadCrumbs currentPage="Super Heroes" />
      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs defaultValue={selectedTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={() => setSearchParams((prev) => {
            prev.set('tab','all')
            return prev;
          })}>All Characters (16)</TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="flex items-center gap-2"
            onClick={() => setSearchParams((prev) => {
            prev.set('tab','favorites')
            return prev;
          })}
          >
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes" onClick={() => setSearchParams((prev) => {
            prev.set('tab','heroes')
            return prev;
          })}>
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger value="villains" onClick={() => setSearchParams((prev) => {
            prev.set('tab','villains')
            return prev;
          })}>
            Villains (2)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {/* Mostrar todos los personajes */}
          <h1>Todos los personajes</h1>
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="favorites">
          {/* Mostrar todos los personajes favoritos */}
          <h1>Favoritos</h1>
          <HeroGrid heroes={[]} />
        </TabsContent>
        <TabsContent value="heroes">
          {/* Mostrar todos los heroes */}
          <h1>Heroes</h1>
          <HeroGrid heroes={[]} />
        </TabsContent>
        <TabsContent value="villains">
          {/* Mostrar todos los villanos */}
          <h1>Villanos</h1>
          <HeroGrid heroes={[]} />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPage={8} />
    </>
  );
}
