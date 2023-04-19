import { MyWishlist } from 'components/MyWishlist/MyWishlist';
import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { Wishlist } from 'components/Wishlist/Wishlist';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Wishlist',
    path: '/wishlist',
  },
];
const WishlistPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Wishlist'>
      <MyWishlist/>
    </PublicLayout>
  );
};

export default WishlistPage;