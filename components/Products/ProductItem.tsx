import { cn } from "@/lib/utils";
import { productDataType } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import { buttonVariance } from "../ui/Button";
import Reviews from "../partOfProductDetails/Reviews";
import { CurrencyFormatter } from "../shared/CurrencyFormatter";

interface ProductItemProps {
  productData: productDataType;
}

const ProductItem: React.FC<ProductItemProps> = ({ productData }) => {
  return (
    <div className='h-[30rem'>
      <div className='shadow-sm flex flex-col items-center gap-3  rounded-lg h-full p-5'>
        <div className='h-[18rem] w-full overflow-hidden rounded'>
          <Link
            href={`/products/${productData._id}`}
            className='w=[18rem] h-[18rem] inline-block'
          >
            <Image
              height={1280}
              width={640}
              src={productData.images[0]}
              alt={productData.category}
              priority
              className='w-full h-full object-cover'
            />
          </Link>
        </div>

        <div className='  h-[8rem] flex flex-col gap-2 items-center'>
          <div className='flex flex-col items-center gap-1'>
            <h2 className=' text-center'>{productData.title}</h2>
            <div className='flex items-center'>
              <Reviews review={productData} />
              <span>(360)</span>
            </div>
          </div>
          <div className='flex justify-around gap-2'>
            <span className='font-bold text-xl tracking-widest'>
              <CurrencyFormatter amount={productData?.price} />
            </span>
            <del className='text-xs '>
              <CurrencyFormatter amount={(productData?.price * 3) / 2} />
            </del>
          </div>
        </div>

        <div className='flex justify-between items-center  '>
          <Link
            href={`/products/${productData._id}`}
            className={cn(buttonVariance({ variant: "outline" }))}
          >
            Veiw details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
