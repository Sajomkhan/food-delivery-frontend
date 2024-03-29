import { createContext, useState } from "react";
import { food_list } from '../assets/assets';

export const FoodsContext = createContext(null)

const FoodsProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
    }

    const contextValue = {
        food_list
    }

    return(
        <FoodsContext.Provider value={contextValue}>
            {props.children}
        </FoodsContext.Provider>

    )
}

export default FoodsProvider