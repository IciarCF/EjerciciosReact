import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'
import { Link } from 'react-router';

interface Breadcrumb {
  label: string;
  to: string
}

interface Props {
    currentPage: string;
    breadcrumbs?: Breadcrumb[];
}

export const CustomBreadCrumbs = ({currentPage, breadcrumbs = []} : Props) => {


  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link to="/">Inicio</Link>} />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadcrumbs.map((crumb) => (
          <div className='flex items-center'>
            <BreadcrumbItem>
              <BreadcrumbLink
                render={<Link to={crumb.to}>{crumb.label}</Link>}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </div>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
