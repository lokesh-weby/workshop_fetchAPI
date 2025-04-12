import { useEffect, useState } from "react"

export const FetchData= (category)=>{
    const [Products, setProducts] = useState([]);
    
    var endPoint=`https://dummyjson.com/products/category/${category}`;

    useEffect(() => {
        fetchProducts();
    },[endPoint]);

    async function fetchProducts(){
        try {
            const response = await fetch(endPoint);
            const data = await response.json();
            setProducts(data.products);  
        } catch (error) {
            console.log(error);
            
        }
    }
    // console.log(Products);
    return {Products};

}