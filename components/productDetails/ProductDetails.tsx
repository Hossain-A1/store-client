"use client";

import { productDataType } from "@/types/product.type";
import ProductImages from "../partOfProductDetails/ProductImages";
import Reviews from "../partOfProductDetails/Reviews";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariance } from "../ui/Button";
import { CurrencyFormatter } from "../shared/CurrencyFormatter";
import {
  TbReportMoney,
  TbTruckDelivery,
  TbBox,
  TbLockDollar,
} from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/carts/cartSlice";
import { useState } from "react";

interface ProductDetailsProps {
  productItem: productDataType;
  isLoading: boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productItem,
  isLoading,
}) => {
  const [redMore, setRedMore] = useState<boolean>(true);
  const dispatch = useDispatch();

  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
      {/* left side */}
      <div>{!isLoading && <ProductImages productItem={productItem} />}</div>
      {/* rignt side */}
      {productItem && (
        <div>
          <div className='flex flex-col gap-3 items-start text-dark'>
            <h1>{productItem?.title}</h1>

            <div className='flex gap-2 items-center justify-start'>
              <Reviews review={productItem} />
              <span className='text-sm font-bold'>({productItem?.rating})</span>
              <p className='text-sm text-blue'>721 reviews</p>
              <p className='text-sm text-violet'>2.3k Sold</p>
            </div>

            <del className='text-xs'>
              <CurrencyFormatter amount={(productItem?.price * 3) / 2} />
            </del>
            <span className='font-bold text-xl tracking-widest'>
              <CurrencyFormatter amount={productItem?.price} />
            </span>

            <hr className='border border-light_dark w-1/2' />

            <div className='space-y-2'>
              <h3 className='text-blue font-medium text-sm'>
                <span>FREE</span> Returns
              </h3>
              <p className='text-sm'>
                All prices include <span>VAT.</span>
              </p>

              <div className='product-warranty flex justify-between gap-5 items-center'>
                <div className='product-facility flex  flex-col  items-center gap-2 '>
                  <div className='bg-light p-1 rounded-full'>
                    <TbReportMoney className='text-3xl text-orange/70 ' />
                  </div>
                  <p className='text-xs font-medium capitalize text-blue/90 text-center'>
                    Cash on Delivery
                  </p>
                </div>
                <div className='product-facility flex flex-col   items-center gap-2'>
                  <div className='bg-light p-1 rounded-full'>
                    <TbBox className='text-3xl text-orange/70 ' />
                  </div>

                  <p className='text-xs font-medium capitalize   text-blue/90  text-center'>
                    15 days Returnable
                  </p>
                </div>
                <div className='product-facility flex flex-col   items-center gap-2'>
                  <div className='bg-light p-1 rounded-full'>
                    <TbTruckDelivery className='text-3xl text-orange/70 ' />
                  </div>

                  <p className='text-xs font-medium capitalize  text-blue/90 text-center'>
                    Delivered by Nur store
                  </p>
                </div>
                <div className='product-facility flex flex-col   items-center gap-2'>
                  <div className='bg-light p-1 rounded-full'>
                    <TbLockDollar className='text-3xl text-orange/70 ' />
                  </div>

                  <p className='text-xs font-medium capitalize  text-blue/90 text-center'>
                    Secure transaction
                  </p>
                </div>
              </div>
            </div>
            <hr className='border border-light_dark w-full' />

            <p className='text-sm'>
              {productItem?.description.substring(0, 142)}{" "}
              <span
                className={`${redMore ? "cursor-pointer text-blue" : "hidden"}`}
                onClick={() => setRedMore(!redMore)}
              >
                See more...
              </span>{" "}
              {!redMore && (
                <span>{productItem?.description.substring(142, 1000)}</span>
              )}
            </p>

            <Link
              onClick={() => dispatch(addToCart({ ...productItem, count: 1 }))}
              href='/cart'
              className={cn(buttonVariance({ variant: "halloween" }))}
            >
              Add to Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
