/* eslint-disable react/prop-types */
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Dropdown.css";

// // eslint-disable-next-line no-unused-vars
// function SkinCareDropdown() {
//   const [SkinCareDropdown, setDropdown] = useState(false);

//   return (
//     <>
//       <ul
//         className={SkinCareDropdown ? "SkinCare-submenu clicked" : "SkinCare-submenu"}
//         onClick={() => setDropdown(!SkinCareDropdown)}
//       >
//         {SkinCareDropdown.map((item) => {
//           return (
//             <li key={item.id}>
//               <Link
//                 to={item.path}
//                 className={item.cName}
//                 onClick={() => setDropdown(false)}
//               >
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// // eslint-disable-next-line no-undef
// export default SkinCareDropdown;

// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavItems from './NavItems'

// eslint-disable-next-line react/prop-types
const Dropdown = ({submens, depthlevel}) => {
   depthlevel = depthlevel +1;
   const dropdownClass = depthlevel >1 ? 'dropdown-submenu':'';
  return (
    <div>
      <ul className={`dropdown-submenu ${dropdownClass}`}>
        {/* // eslint-disable-next-line react/prop-types */}
        {submens.map((submenu,index)=>(
          <NavItems items={submenu} key={index} depthlevel={depthlevel}/>
        ))}
        </ul>
    </div>
  )
}

export default Dropdown
