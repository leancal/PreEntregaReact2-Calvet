import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

    const [products,setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect (()=>{
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;
        asyncFunction(categoryId)
        .then (response=>{
            setProducts(response)
        })
        .catch (error =>{
            console.error(error)
        })
    },[categoryId]);

    return(
        <div className = "container">
            <h1 className="greetingMsg">{ greeting }</h1>
            <ItemList products={ products }/>
            
        </div>
    );
}

export default ItemListContainer;
