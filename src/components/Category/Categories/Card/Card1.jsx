import Link from 'next/link';

const link_URL=[{url:'/category_newarrival'},
  {url:"/category_basics"},
  {url:"/Category_formalEdit"}]

export const Card1 = ({ category }) => {
  const { image_title, image_url} = category;
  return (
    <a className='top-categories__item'>
    <img src={`https://meeraki.com/${image_url}`} className='js-img' alt='' />
    {link_URL.map((item)=>{
     return(
      <Link href={item.url}>
          <div className='top-categories__item-hover'>
          <h5>{image_title}</h5>
          <span></span>
          <i className='icon-arrow-lg'></i>
        </div>
    </Link>
     )
    })}
   </a>
  );
};