import { cn } from "@/lib/utils";
import { productDataType } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

import { buttonVariance } from "../ui/Button";
import { CurrencyFormatter } from "../shared/CurrencyFormatter";

interface FeatureItemProps {
  productData: productDataType;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ productData }) => {
  return (
    <div className=' mt-5'>
      <div className='shadow-sm bg-light items-center flex flex-col  gap-5 p-5 rounded-lg'>
        <h2 className='h-[2rem] text-center'>{productData.title}</h2>

        <Link
          href={`/products/${productData._id}`}
          className='w=[16rem] h-[16rem] inline-block'
        >
          <Image
            height={1280}
            width={640}
            src={productData.images[0]}
            alt={productData.category}
            className='w-full h-full object-cover  rounded'
          />
        </Link>

        <div className='flex justify-between items-center '>
          <span className="text-xl font-semibold">
            <CurrencyFormatter amount={productData.price} />
          </span>

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

export default FeatureItem;
