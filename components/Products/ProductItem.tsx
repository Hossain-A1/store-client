import { productDataType } from '@/types/product.type'
import React from 'react'

interface ProductItemProps  {
productData:productDataType
}



const ProductItem: React.FC <ProductItemProps> = ({productData}) => {
  return (
    <div>{productData.title}</div>
  )
}

export default ProductItem