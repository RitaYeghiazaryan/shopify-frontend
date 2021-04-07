import axios from "axios";
import { useEffect, useState } from "react";
import ShopItems from "./components/shop-items/ShopItems.component";

import styles from "./shop.module.scss";

const Shop = ({ history }) => {
    const [shopState, setShopState] = useState([]);

    useEffect(() => {
        axios.get("shop").then((result) => {
            const { data } = result;
            setShopState(data);
        });
    }, []);

    //const categories = ["hats", "sneakers", "womens", "mens", "jackets"];

    // const handleShopCategoryClick = (category) => {
    //     history.push(`/shop/${category}`);
    // };

    return (
        <div className={styles.container}>
           {shopState.map((shopItem)=>{
               return(
                   <div> 
                      
                     <span>{shopItem.name}</span>
                     <div>{shopItem.category}</div>
                     <img src={shopItem.imageUrl} alt=""/>
                       </div>
               )
                  
               
           })}
        </div>
    );
};

export default Shop;
