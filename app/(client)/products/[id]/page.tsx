


import React from 'react'

interface Iprops{
    params: Promise<{
        id:string
    }>;
}

const ProductDetailPage = async ({params}:Iprops) => {
    const{id} = await params;
    console.log("ProductID", id)
  return (
    <div>
        <h1>Product Detail Page</h1>
        <p> ProductID:{id}</p>

    
    </div>
  )
}

export default ProductDetailPage