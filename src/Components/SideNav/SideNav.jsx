import React from 'react';
import PropTypes from 'prop-types';
import './SideNav.css';
const SideNav = ({collapse, setCollapse}) => {
  
  return (
    <div className="">
      <aside className={collapse.value?'aside bg-light-ash h-100': 'aside active'}>
          <div className={collapse.value?'aside bg-light-ash h-100': 'aside active'}>
              
              <div className="h-100">
                <div className="py-2 pl-2">Main Page</div>
                <div className="mt-2 py-2 pl-2">Product</div>
              </div>
          </div>
      </aside>
      <div onClick={() => {setCollapse({value: !collapse.value})}}  className={collapse.value?'overlay':'overlay active'}>

      </div>

    </div>
  );
};

SideNav.propTypes = {};

export default SideNav;
