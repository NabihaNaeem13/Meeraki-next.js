import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import Model from '../Model/Model';
import {currencies} from 'data/Currencies';
import { useState } from 'react';

const MidNav = ({ onCurrencyChange, currency }) => {
  const [listopen, setListopen] = useState();
  const handleOptionClick = (curr) => {
    onCurrencyChange(curr);
    setListopen(!listopen);
  };

  return (
    <div className='header-top-midtop'>
   <div className="container-fluid bottom-pico">
        <div className="row">
          <div className="col-4 center-trick">
          </div>
          <div className="col-4 mt-2 mb-2 text-center center-trick">
            <a href="https://meeraki.com/">
              <img
                className="netimgsrc"
                src="https://meeraki.com/public/uploads/all/ytbKOOCeNfVqpzgTftxI7MjtLepZS6tx3ThHJnd0.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-4 center-trick cntr-enc">
            <div className='row'>
             <div className='col-3 offset-7'>
             <div className="dropdown">
              <button
                className="dd_btn ma_toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="ml-2 lazyloaded"
                  src={currency.icon}
                  alt=""
                  style={{ width: "1.5rem" }}
                />
                  <BiChevronDown/>
              </button>
              <ul
                className="dropdown-menu ma_drop"
                aria-labelledby="dropdownMenuButton1"
                style={{padding:"0 0"}}
              >
              {currencies.map((curElement)=>{
                const {name,icon}=curElement;
                return(
                  <li>
                  <a className="dropdown-item text-reset py-2" href="#as" onClick={() => handleOptionClick(curElement)} key={name}>
                   {name}
                    <img
                      className="ml-2 lazyloaded"
                      src={icon}
                      alt=""
                      style={{ width: "1.5rem", marginLeft: "8px" }}
                    />
                  </a>
                </li>
                )
              })}
              </ul>
            </div>
             </div>
             <div className='col-1'> <Model/></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidNav