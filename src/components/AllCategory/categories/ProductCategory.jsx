import React from 'react'
import {FiFilter,FiChevronLeft} from "react-icons/fi";
import {BiChevronDown} from "react-icons/bi";
import { Categories } from 'components/Category/Categories/Categories';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useProductContext } from '../../../Context/productContext';
import Link from "next/link";

const API="https://meeraki.com/api/v2/products/category/";
export const ProductCategory = () => {
  const {getCategoryProduct,categoryProduct,iscategoryProductLoading}=useProductContext();
  const router = useRouter();
  const {id}=router.query;
  useEffect(() => {
    getCategoryProduct(`${API}${id}`);
}, [router.query.id]);

  if(iscategoryProductLoading){
    return(
      <div>....Loading</div>
    )
  }

  return (
    <section className='mb-4 pt-3 bg-light'>
        <div className='container sm-px-0'>
        <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item opacity-50"><Link className='category-blink text-reset' href="/">Home</Link></li>
    <li className="breadcrumb-item opacity-50"><Link href="/categories" className='category-blink text-reset'>All categories</Link></li>
  </ol>
</nav>
                       <div className="row mt-5 mb-4">
                         <div className="col-lg-3 col-md-4"></div>
                          <div className="col-lg-6 col-md-4">
                            <p style={{textAlign: "center",fontSize: "15px",lineHeight: "1.6"}}>The Collection of a unique fusion of contemporary className and timeless fashion. Bringing you a range of subtly ornate designs paired with plethora of colors stand out contrasting against exclusively luxe fabrics. </p>
                          </div>
                         <div className="col-lg-3 col-md-4"></div>
                        </div> 
                       </div>
                            <div className="d-flex align-items-center px-md-5">
                            <div className='col-lg-1 col-md-1'>
                            </div>
                            <div className="col-lg-4 col-md-3 align-self-end ">
                            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FiFilter id="filtericon"/></button>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">
Filters</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className='bg-white shadow-sm rounded mb-3 border-top'>
    <h2 className='fs-15 fw-600 p-3 border-bottom'>
    Categories
    </h2>
    <div className='p-3'>
      <ul className='list-unstyled'>
      <li className='mb-2'>
        <a className='text-reset fs-14 fw-600' href='#as'>
        <FiChevronLeft className='fs-15 mx-1'/>
        All categories
        </a>
      </li>
      <li className='mb-2'>
        <a className='text-reset fs-14 fw-600' href='#as'>
        <FiChevronLeft className='fs-15 mx-1'/>
        ready To wear
        </a>
      </li>
      <li className='mb-2'>
        <a className='text-reset fs-14 fw-600' href='#as'>
        <FiChevronLeft className='fs-15 mx-1'/>
 Clearance
        </a>
      </li>
      </ul>
    </div>
    <div className='bg-white shadow-sm rounded mb-3 border-top'>
    <h2 className='fs-15 fw-600 p-3 border-bottom'>
    Price range
    </h2>

    </div>
    <div className='bg-white shadow-sm rounded mb-3'>
    <h2 className='fs-15 fw-600 p-3 border-bottom'>
    Filter by size
    </h2>
    <div className="col d-flex justify-content-left px-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="small"
                            />
                            <label
                              className="form-check-label text-dark"
                              for="small"
                            >
                              small
                            </label>
                          </div>
                          </div>
    </div>
  </div>
  </div>
</div>
  <div className="col-lg-3 col-md-2 offset-md-4 px-md-5">
  <form className='form-group ml-auto mr-0 w-200px d-none d-xl-block justify-content-center'>
                            <label className="mb-0 opacity-50">Sort By</label>
                            <div className="dropdown">
  <button className="btn categoryBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Newest <BiChevronDown id="BiChevronDown"/>
  </button>
  <ul className="dropdown-menu" style={{width:"90%"}} aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item categoery-dropdown" href="#as">Newest</a></li>
    <li><a className="dropdown-item categoery-dropdown" href="#as">Oldest</a></li>
    <li><a className="dropdown-item categoery-dropdown" href="#as">Price low to high</a></li>
    <li><a className="dropdown-item categoery-dropdown" href="#as">Price high to low</a></li>
  </ul>
</div>
                </form>
  </div>
                            </div>
                            <section className='all-categories'>
        <div className='top-categories__items'>
          <Categories categories={categoryProduct} />
        </div>
      </section>         
    </section>
  )
}
