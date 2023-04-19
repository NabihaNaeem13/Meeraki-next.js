import React from 'react'
import { MyWishlist } from 'components/MyWishlist/MyWishlist';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Wishlist',
    path: '/my_wishlist',
  },
];

const my_wishlist = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Wishlist'>
    <MyWishlist/>
  </PublicLayout>
  )
}

export default my_wishlist