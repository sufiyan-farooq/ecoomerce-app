import Cart from "../components/cart"
import { useContext } from "react"
import { CartContext } from "../context/cartcontext"
export default function CartPage(){
 
    const {cartItems} = useContext(CartContext)
    return (
        <>
        <Cart cartItems={cartItems} />
        </>
    )
}