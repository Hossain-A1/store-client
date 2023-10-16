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

interface ProductDetailsProps {
  productItem: productDataType;
  isLoading: boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productItem,
  isLoading,
}) => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
      {/* left side */}
      <div>{!isLoading && <ProductImages productItem={productItem} />}</div>
      {/* rignt side */}
      {productItem && (
        <div>
          <div className='flex flex-col gap-3 items-start text-dark'>
            <h2>{productItem?.title}</h2>

            <div className='flex gap-1 items-center justify-start'>
              <span className='text-sm'>{productItem?.rating}</span>
              <Reviews review={productItem} />
              <p className='text-sm'>(300) ratings</p>
            </div>

            <span className='font-bold text-xl tracking-widest'>
              <CurrencyFormatter amount={productItem?.price} />
            </span>
            <del className='text-xs'>
              <CurrencyFormatter amount={(productItem?.price * 3) / 2} />
            </del>
            <hr className='border border-light_dark w-1/2' />

            <div className="space-y-2">
              <h3 className='text-blue font-medium text-sm'>
                <span>FREE</span> Returns
              </h3>
              <p className='text-sm'>
                All prices include <span>VAT.</span>
              </p>

              <div className='product-warranty flex justify-between gap-5 items-center'>
                <div className='product-facility flex  flex-col  items-center gap-2 '>
                  <div className='bg-light_dark p-1 rounded-full'>
                    <TbReportMoney className='text-3xl text-orange/70 ' />
                  </div>
                  <p className='text-xs font-medium capitalize text-blue/90 text-center'>
                    Cash on Delivery
                  </p>
                </div>
                <div className='product-facility flex flex-col   items-center gap-2'>
                  <div className='bg-light_dark p-1 rounded-full'>
                    <TbBox className='text-3xl text-orange/70 ' />
                  </div>

                  <p className='text-xs font-medium capitalize   text-blue/90  text-center'>
                    15 days Returnable
                  </p>
                </div>
                <div className='product-facility flex flex-col   items-center gap-2'>
                  <div className='bg-light_dark p-1 rounded-full'>
                    <TbTruckDelivery className='text-3xl text-orange/70 ' />
                  </div>

                  <p className='text-xs font-medium capitalize  text-blue/90 text-center'>
                    Delivered by Nur store
                  </p>
                </div>
                <div className='product-facility flex flex-col   items-center gap-2'>
                  <div className='bg-light_dark p-1 rounded-full'>
                    <TbLockDollar className='text-3xl text-orange/70 ' />
                  </div>

                  <p className='text-xs font-medium capitalize  text-blue/90 text-center'>
                    Secure transaction
                  </p>
                </div>
              </div>

            </div>
            <hr className='border border-light_dark w-full' />

            <p className='text-sm'>{productItem?.description}</p>
          </div>

          <Link
            href='/cart'
            className={cn(buttonVariance({ variant: "halloween" }))}
          >
            Add to Cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
