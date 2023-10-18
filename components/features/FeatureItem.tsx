import { cn } from "@/lib/utils";
import { productDataType } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

import { buttonVariance } from "../ui/Button";

interface FeatureItemProps {
  productData: productDataType;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ productData }) => {
  return (
    <div className='mt-5'>
      <div className='shadow-sm bg-light flex flex-col items-center gap-5 py-5 rounded-lg'>
        <h2 className='h-[2rem] text-center'>{productData.title}</h2>

        <Link
          href={`/products/${productData._id}`}
          className='w=[16rem] h-[16rem]'
        >
          <Image
            height={1280}
            width={640}
            src={productData.images[0]}
            alt={productData.category}
            className='w-full h-full object-cover'
          />
        </Link>

        <Link
          href={`/products/${productData._id}`}
          className={cn(buttonVariance({ variant: "outline" }))}
        >
          Veiw details
        </Link>
      </div>
    </div>
  );
};

export default FeatureItem;
