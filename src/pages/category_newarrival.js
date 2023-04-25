import { Category } from 'components/Category/Category';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'All Category',
    path: '/categories',
  },
  {
    label: 'New Arrivals',
    path: '/category_newarrival',
  },
];
const category_newarrival = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='New Arrivals' description="
    The Collection of a unique fusion of contemporary class and timeless fashion. Bringing you a range of subtly ornate designs paired with plethora of colors stand out contrasting against exclusively luxe fabrics.">
      <Category />
    </PublicLayout>
  );
};

export default category_newarrival;
