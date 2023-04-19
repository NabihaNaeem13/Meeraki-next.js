import React from 'react'
import { PublicLayout } from 'layout/PublicLayout';
import { FormalEdit } from 'components/Category/formalEdit';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Formal Edit',
    path: '/Category_formalEdit',
  },
];
const Category_formalEdit = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Formal Edit'>
    <FormalEdit/>
  </PublicLayout>
  )
}

export default Category_formalEdit