"use client";
import { productDataType } from "@/types/product.type";
import SectionTitle from "../shared/SectionTitle";
import HorizontalTab from "../ui/HorizontalTab";
import useFetch from "@/hooks/use-fetch";
import Loading from "../shared/Loading";
import Error from "../shared/Error";
import FeatureItem from "./FeatureItem";

const Feature = () => {
  const { error, isLoading, data: products } = useFetch("/api/products");

  return (
    <div className='wrapper section-p '>
      <SectionTitle subtitle='Our' title='Features' />

      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}

      {products && products?.length > 0 && (
        <HorizontalTab tabs={["Electonic", "Clothes", "variety"]}>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
            {products
              .filter(
                (item: productDataType) => item.category === "Electronics"
              )
              .sort(
                (a: productDataType, b: productDataType) => a.price - b.price
              )
              .slice(2, 5)
              .map((item: productDataType) => (
                <FeatureItem key={item._id} productData={item} />
              ))}
          </div>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
            {products
              .filter((item: productDataType) => item.category === "Clothes")
              .sort(
                (a: productDataType, b: productDataType) => a.price - b.price
              )
              .slice(0, 3)
              .map((item: productDataType) => (
                <FeatureItem key={item._id} productData={item} />
              ))}
           
          </div>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
            {products
              .filter((item: productDataType) => item.category === "Varietes")
              .sort(
                (a: productDataType, b: productDataType) => a.price - b.price
              )
              .slice(0, 3)
              .map((item: productDataType) => (
                <FeatureItem key={item._id} productData={item} />
              ))}
           
          </div>
        </HorizontalTab>
      )}
    </div>
  );
};

export default Feature;
