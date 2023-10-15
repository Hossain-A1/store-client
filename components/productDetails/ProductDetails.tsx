import { productDataType } from "@/types/product.type";
import ProductImages from "../partOfProductDetails/ProductImages";
import Reviews from "../partOfProductDetails/Reviews";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariance } from "../ui/Button";

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
          <div className='flex flex-col gap-3 items-start'>
            <h2>{productItem?.title}</h2>

            <Reviews review={productItem} />
            <span>Rating:{productItem?.rating}</span>
            <p className='text-sm'>{productItem?.description}</p>
            <span>{productItem?.price}</span>
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
