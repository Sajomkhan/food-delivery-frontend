import { createContext } from "react";
import { food_list } from '../assets/assets';

export const FoodsContext = createContext(null)

const FoodsProvider = (props) => {
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