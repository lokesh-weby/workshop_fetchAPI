import { useEffect, useState } from "react"



export const FetchData= (category)=>{
    const [Products, setProducts] = useState([]);

    var endPoint=`https://dummyjson.com/products/category/${category}`;
    console.log(endPoint);
    

    useEffect(() => {
        fetchProducts();
    },[endPoint]);

    async function fetchProducts(){
        fetch(endPoint)
        .then((response) => response.json())
        .then((json) => setProducts(json.products))
        .catch((error) => console.log(error));
    }

    // console.log(data);

    return {Products};



}