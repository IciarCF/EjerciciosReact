import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControl } from './ui/SearchControl';
import { CustomBreadCrumbs } from '@/components/custom/CustomBreadCrumbs';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de Heroes"
        description="Busca tu heroe o villano favorito"
      />

      <CustomBreadCrumbs
        currentPage="Buscador"
      />
      {/* Stats Dachboard */}
      <HeroStats />
      {/*Filter and search */}
      <SearchControl />
    </>
  );
};

export default SearchPage;
