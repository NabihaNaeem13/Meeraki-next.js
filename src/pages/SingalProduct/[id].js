import { Singal_Product } from 'components/Product/ProductDetails/Singal_Product';
import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { PublicLayout } from 'layout/PublicLayout';
import React from 'react'
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
      label: 'Singal Product',
      path: '/SingalProduct',
    },
  ];

const SingalProduct = (data) => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Singal Product'>
    <Singal_Product data={data}/>
    <MostViewed additionalClass='product-viewed' />
   </PublicLayout>
  )
}

export async function getStaticPaths() {
    const data=await (await fetch(`https://meeraki.com/api/v2/products/new-arrival`)).json();
    const allnewArrival=data.data.map((product)=>product.id);
    
    return {
      paths:[{ params: { id: '1' } }, { params: { id: '2' } },{ params: { id: '3' } },{ params: { id: '4' } },{ params: { id: '5' } },{ params: { id: '6' } },{ params: { id: '7' } },{ params: { id: '8' } },{ params: { id: '9' } },{ params: { id: '10' } },{ params: { id: '11' } },{ params: { id: '12' } },{ params: { id: '13' } },{ params: { id: '14' } },{ params: { id: '15' } },{ params: { id: '16' } },{ params: { id: '17' } },{ params: { id: '18' } },{ params: { id: '19' } },{ params: { id: '20' } },{ params: { id: '21' } },{ params: { id: '22' } },{ params: { id: '23' } },{ params: { id: '24' } },{ params: { id: '25' } },{ params: { id: '26' } },{ params: { id: '27' } },{ params: { id: '28' } },{ params: { id: '29' } },{ params: { id: '30' } },{ params: { id: '31' } },{ params: { id: '32' } },{ params: { id: '33' } },{ params: { id: '34' } },{ params: { id: '35' } },{ params: { id: '36' } },{ params: { id: '37' } },{ params: { id: '38' } },{ params: { id: '39' } },{ params: { id: '40' } },{ params: { id: '41' } },{ params: { id: '42' } },{ params: { id: '43' } },{ params: { id: '44' } },{ params: { id: '45' } },{ params: { id: '46' } },{ params: { id: '47' } },{ params: { id: '48' } },{ params: { id: '49' } },{ params: { id: '50' } },{ params: { id: '51' } },{ params: { id: '52' } },{ params: { id: '53' } },{ params: { id: '54' } },{ params: { id: '55' } },{ params: { id: '56' } },{ params: { id: '57' } },{ params: { id: '58' } },{ params: { id: '59' } },{ params: { id: '60' } },{ params: { id: '71' } },{ params: { id: '72' } },{ params: { id: '73' } },{ params: { id: '74' } },{ params: { id: '75' } },{ params: { id: '76' } },{ params: { id: '77' } },{ params: { id: '78' } },{ params: { id: '79' } },{ params: { id: '70' } },{ params: { id: '71' } },{ params: { id: '72' } },{ params: { id: '73' } },{ params: { id: '74' } },{ params: { id: '75' } },{ params: { id: '76' } },{ params: { id: '77' } },{ params: { id: '78' } },{ params: { id: '79' } },{ params: { id: '80' } },{ params: { id: '81' } },{ params: { id: '82' } },{ params: { id: '83' } },{ params: { id: '84' } },{ params: { id: '85' } },{ params: { id: '86' } },{ params: { id: '87' } },{ params: { id: '88' } },{ params: { id: '89' } },{ params: { id: '90' } },{ params: { id: '91' } },{ params: { id: '92' } },{ params: { id: '93' } },{ params: { id: '94' } },{ params: { id: '95' } },{ params: { id: '96' } },{ params: { id: '97' } },{ params: { id: '98' } },{ params: { id: '99' } },{ params: { id: '100' } },{ params: { id: '101' } },{ params: { id: '102' } },{ params: { id: '103' } },{ params: { id: '104' } },{ params: { id: '105' } },{ params: { id: '106' } },{ params: { id: '107' } },{ params: { id: '108' } },{ params: { id: '109' } },{ params: { id: '110' } },{ params: { id: '111' } },{ params: { id: '112' } },{ params: { id: '113' } },{ params: { id: '114' } },{ params: { id: '115' } },{ params: { id: '116' } },{ params: { id: '117' } },{ params: { id: '118' } },{ params: { id: '119' } },{ params: { id: '120' } },{ params: { id: '121' } },{ params: { id: '122' } },{ params: { id: '123' } },{ params: { id: '124' } },{ params: { id: '125' } },{ params: { id: '126' } },{ params: { id: '127' } },{ params: { id: '128' } },{ params: { id: '129' } },{ params: { id: '130' } },{ params: { id: '131' } },{ params: { id: '132' } },{ params: { id: '133' } },{ params: { id: '134' } },{ params: { id: '135' } },{ params: { id: '136' } },{ params: { id: '137' } },{ params: { id: '138' } },{ params: { id: '139' } },{ params: { id: '140' } },{ params: { id: '141' } },{ params: { id: '142' } },{ params: { id: '143' } },{ params: { id: '144' } },{ params: { id: '145' } },{ params: { id: '146' } },{ params: { id: '147' } },{ params: { id: '148' } },{ params: { id: '149' } },{ params: { id: '150' } },],
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

export default SingalProduct

//allnewArrival.map((productID)=>({params:{id:`${productID}`}})),