import React from 'react'
import './Header2.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header2() {
    // const [open, setOpen] = useState(false);
    // const Menu = ['Men', 'Women', 'Kids'];

  return (
      <div className='header2'>
          <div className='header__nav2'>
          <div className='header__option2'>
                  <span>Clothing</span>
                  <ArrowDropDownIcon className='aroow__logo'/>
              {/* <select placeholder='select here'>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option>
              </select> */}
              </div>
              {/* {
                  open && (
                    <div className='clothing__drop'>
                    <ul>
                        {
                            Menu.map((menu) => (
                                <li
                                    onClick={()=>setOpen(false)}
                                    classname='clothing__dropMenu' key={menu}>
                                    {menu}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                  )
              } */}
              
          <div className='header__option2'>
                  <span>Food</span>
                  <ArrowDropDownIcon className='aroow__logo'/>
              {/* <select>
                  <option>Veg</option>
                  <option>Nonveg</option>
                  
              </select> */}
          </div>
          <div className='header__option2'>
                  <span>Grocery</span>
                  <ArrowDropDownIcon className='aroow__logo'/>
              {/* <select placeholder='select here'>
                  <option>Snacks</option>
                  <option>Bathroom washes</option>
                  <option>Cooking items</option>
                  
              </select> */}
              </div>
              <div className='header__option2'>
                  <span>Accesoories</span>
                  <ArrowDropDownIcon className='aroow__logo'/>
                  {/* <select>
                  <option>Shoes</option>
                  <option>Jewelry</option>
                  <option>Beauty</option>
                  
              </select> */}
              </div>
              <div className='header__option2'>
                  <span>Stationary</span>
                  <ArrowDropDownIcon className='aroow__logo'/>
              {/* <select placeholder='select here'>
                  <option>Books</option>
                  <option>Pens</option>
                  <option>Pencils</option>
                  
              </select> */}
               <div className='header__option2'>
                  <span>Electronics</span>
                      <ArrowDropDownIcon className='aroow__logo' /> 
                </div>    
        </div>
          </div>
          
    </div>
  )
}

export default Header2
