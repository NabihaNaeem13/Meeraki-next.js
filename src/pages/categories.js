import { Category } from 'components/Category/Category';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'New Arrivals',
    path: '/categories',
  },
];
const CategoriesPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='New Arrivals'>
      <Category />
    </PublicLayout>
  );
};

export default CategoriesPage;
