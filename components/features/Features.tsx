"use client";
import { productDataType } from "@/types/product.type";
import SectionTitle from "../shared/SectionTitle";
import HorizontalTab from "../ui/HorizontalTab";
import useFetch from "@/hooks/use-fetch";
import Loading from "../shared/Loading";
import Error from "../shared/Error";
import FeatureItem from "./FeatureItem";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariance } from "../ui/Button";

interface FeatureData {
  native?: boolean;
}

const Feature = ({ native }: { native: FeatureData }) => {
  const { error, isLoading, data: products } = useFetch("/api/products");

  return (
    <div className='container section-p '>
      <SectionTitle subtitle='Our' title='Features' />

      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}

      {!native && products && products?.length > 0 && (
        <>
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
                .filter((item: productDataType) => item.category === "Variety")
                .sort(
                  (a: productDataType, b: productDataType) => a.price - b.price
                )
                .slice(0, 3)
                .map((item: productDataType) => (
                  <FeatureItem key={item._id} productData={item} />
                ))}
            </div>
          </HorizontalTab>
          <div>
            {!native && (
              <div className='flex justify-center items-center mt-20'>
                <Link
                  href='/products'
                  className={cn(buttonVariance({ variant: "outline" }))}
                >
                  View All Products
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Feature;
