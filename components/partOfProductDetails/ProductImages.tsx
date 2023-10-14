import { productDataType } from "@/types/product.type";
import { useState } from "react";
interface ProductItemProps {
  productItem: productDataType;
}
const ProductImages: React.FC<ProductItemProps> = ({ productItem }) => {
  const [images, setImages] = useState(productItem?.images[0]);
  return (
    <div className='  grid grid-cols-3 gap-5 section-p'>
      <div className='flex flex-col  items-start'>
        {productItem?.images.map((img, i) => {
          return (
            <figure key={i} className='w-[6rem] h-[6rem]'>
              <img
                src={img}
                alt=''
                onClick={() => setImages(img)}
                className='cursor-pointer object-cover'
              />
            </figure>
          );
        })}
      </div>

      <div className='flex justify-center items-center col-span-2 overflow-hidden'>
        <img
          src={images}
          alt={productItem?.category}
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default ProductImages;
