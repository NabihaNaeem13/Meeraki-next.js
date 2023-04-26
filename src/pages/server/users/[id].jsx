import React from 'react'
const { PublicLayout } = require('layout/PublicLayout');

const breadcrumbsData = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Shop',
      path: '/shop',
    },
    {
      label: 'Products',
      path: '/users',
    },
  ];

const UserPage = (data) => {
  console.log("data line 20",data);
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Products'>
      fgg
    </PublicLayout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const id=context.params.id;
  const data=await (await fetch(`https://meeraki.com/api/v2/products/${id}`)).json();

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}

export default UserPage