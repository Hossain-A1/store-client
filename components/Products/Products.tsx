"use client";
import { productDataType } from "@/types/product.type";
import ProductItem from "./ProductItem";
import useFetch from "@/hooks/use-fetch";
import Loading from "../shared/Loading";
import Error from "../shared/Error";
import SectionTitle from "../shared/SectionTitle";

const Products = () => {
  const { data: products, error, isLoading } = useFetch("/api/products");
  return (
    <div className='container section-p'>
      <SectionTitle subtitle='Explore' title='Our Products' />
      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}
      {products && products?.length > 0 && (
        <div className='space-y-10'>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
            {products
              .filter(
                (item: productDataType) => item.category === "Electronics"
              )
              .sort(
                (a: productDataType, b: productDataType) => a.price - b.price
              )

              .map((item: productDataType) => (
                <ProductItem key={item._id} productData={item} />
              ))}
          </div>

          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
            {products
              .filter((item: productDataType) => item.category === "Clothes")
              .sort(
                (a: productDataType, b: productDataType) => a.price - b.price
              )

              .map((item: productDataType) => (
                <ProductItem key={item._id} productData={item} />
              ))}
          </div>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
            {products
              .filter((item: productDataType) => item.category === "Variety")
              .sort(
                (a: productDataType, b: productDataType) => a.price - b.price
              )

              .map((item: productDataType) => (
                <ProductItem key={item._id} productData={item} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
