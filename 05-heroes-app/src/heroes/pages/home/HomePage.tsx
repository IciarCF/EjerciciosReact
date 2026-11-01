import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useState } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";
import { getHeroesByPageActions } from "@/heroes/actions/get-heroes-by-pages-actions";
import {  useQuery } from "@tanstack/react-query";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'all'|'favorites'|'heroes'|'villains'>('all');
  
  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageActions(),
    staleTime: 1000 * 60 * 5 //5 min
  })

  console.log({heroesResponse});

  return (
    <>
      <>
        {/*Header*/}
        <CustomJumbotron
          title="Universo de Superhéroes"
          description="Descrubre, explora y administra heroes y villanos"
        />
        {/*Custom breadCrumbs*/}
        <CustomBreadCrumbs currentPage="Super Heroes"/>
        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab("favorites")}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <h1>Todos los personajes</h1>
            <HeroGrid heroes = {heroesResponse?.heroes ?? []}/>
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los personajes favoritos */}
            <h1>Favoritos</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los heroes */}
            <h1>Heroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            <h1>Villanos</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPage={8}/>

      </>
    </>
  );
}
