import { Badge } from "antd";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/cartcontext";
import "../home.css"

export default function Header(){


 

const{cartItems} = useContext(CartContext)
    return (

<nav className="navbar">
  <div className="navbar-container">
    <input type="checkbox" name="" id="checkbox" />
    <div className="hamburger-lines">
      <span className="line line1" />
      <span className="line line2" />
      <span className="line line3" />
    </div>
    <ul className="menu-items">
      <li>
      <NavLink to={'/home'} >Home</NavLink>
           </li>
      <li>
      <NavLink to={'/about'} >About</NavLink>
      </li>
      <li>
      <NavLink to={'/products'} >Product</NavLink>
      </li>
      <li>
      <NavLink to={'/contact'} >Contact</NavLink>      </li>
      <li>
      <NavLink to={'/cart'}>
 <Badge count={cartItems.length} >
     <FaShoppingCart fontSize={30}/>

     </Badge>
 </NavLink>
      </li>
    </ul>

    <div className="logo">
      <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" />
    </div>
  </div>
</nav>




    )
}




//         <header className="text-gray-600 body-font shadow-lg">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//       </svg>
//       <span className="ml-3 text-xl">Tailblocks</span>
//     </span>
//     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//       <NavLink to={'/home'} className="mr-5  font-medium hover:text-red-500">Home</NavLink>
//       <NavLink to={'/about'} className="mr-5  font-medium hover:text-red-500">About</NavLink>
//       <NavLink to={'/products'} className="mr-5  font-medium hover:text-red-500">Product</NavLink>
//       <NavLink to={'/contact'} className="mr-5  font-medium hover:text-red-500">Contact</NavLink>
//     </nav>

 
//   </div>
// </header>