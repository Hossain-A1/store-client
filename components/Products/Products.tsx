"use client";
import { productDataType } from "@/types/product.type";
import SectionTitle from "../shared/SectionTitle";
import HorizontalTab from "../ui/HorizontalTab";
import ProductItem from "./ProductItem";
import useFetch from "@/hooks/use-fetch";
import Loading from "../shared/Loading";
import Error from "../shared/Error";

interface ProductsProps {
  fromProductPage?: boolean;
}

const Products: React.FC<ProductsProps> = ({ fromProductPage }) => {
  const { error, isLoading, data: products } = useFetch("/api/products");

  console.log(products);

  return (
    <div className='wrapper section-p '>
      <SectionTitle subtitle='visual' title='products' />

      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}

      {products && products?.length > 0 && (
        <HorizontalTab tabs={["clectonic", "beauty", "books"]}>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
            {!fromProductPage &&
              products
                .filter(
                  (item: productDataType) => item.category === "Electronics"
                )
                .sort(
                  (a: productDataType, b: productDataType) => a.price - b.price
                )
                .slice(0, 4)
                .map((item: productDataType) => (
                  <ProductItem key={item._id} productData={item} />
                ))}
            {fromProductPage &&
              products
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
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {fromProductPage &&
              products
                .filter((item: productDataType) => item.category === "Beauty")
                .sort(
                  (a: productDataType, b: productDataType) => a.price - b.price
                )
                .map((item: productDataType) => (
                  <ProductItem key={item._id} productData={item} />
                ))}
                 {!fromProductPage &&
              products
                .filter(
                  (item: productDataType) => item.category === "Beauty"
                )
                .sort(
                  (a: productDataType, b: productDataType) => a.price - b.price
                )
                .slice(0, 4)
                .map((item: productDataType) => (
                  <ProductItem key={item._id} productData={item} />
                ))}
          </div>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {!fromProductPage &&
              products
                .filter((item: productDataType) => item.category === "Wellness")
                .sort(
                  (a: productDataType, b: productDataType) => a.price - b.price
                )
                .slice(0, 4)
                .map((item: productDataType) => (
                  <ProductItem key={item._id} productData={item} />
                ))}
            {fromProductPage &&
              products
                .filter((item: productDataType) => item.category === "Wellness")
                .sort(
                  (a: productDataType, b: productDataType) => a.price - b.price
                )
                .map((item: productDataType) => (
                  <ProductItem key={item._id} productData={item} />
                ))}
          </div>
        </HorizontalTab>
      )}
    </div>
  );
};

export default Products;
