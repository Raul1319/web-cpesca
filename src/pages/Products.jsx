import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { categoryProductsSevice } from "../services/products.services"
import CircleLoader from "react-spinners/CircleLoader";

function Products() {


    const [productsList, SetProductsList] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const {list} = useParams();

    useEffect(() =>{
        dataProduct()
        
    },[]);

    const dataProduct = async () =>{

        try {

            const response = await categoryProductsSevice(list);

            SetProductsList(response.data);
            setIsFetching(false);
            
        } catch (error) {
            
        }

    }

    if(isFetching === true) {
        return <CircleLoader />
    }


  return (
    <div>
      
      <h3>Bienvenido a la lista de Productos</h3>

      {list.map((eachProduct) =>{
        return (

          <Link to={`/products/productsId/list/${eachProduct.id}`} key={eachProduct.id}>

            <Products productsList={false} product={eachProduct} />
          </Link>
        )


      })}

    </div>
  )
}

export default Products