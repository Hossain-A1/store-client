import { productDataType } from "@/types/product.type";
import { useState } from "react";
interface ProductItemProps {
  productItem: productDataType;
}
const ProductImages: React.FC<ProductItemProps> = ({ productItem }) => {
  const [images, setImages] = useState(productItem?.images[0]);
  
  return (
    <div className='  grid grid-cols-3 gap-5 section-p'>
      <div className='flex flex-col  items-start gap-5  '>
        {productItem?.images.map((image, i) => {
          return (
            <figure key={i} className='w-[4rem] h-[4rem] '>
              <img
                src={image}
                alt={productItem.title}
                onClick={() => setImages(image)}
                className='cursor-pointer object-cover w-full h-full  '
              />
            </figure>
          );
        })}
      </div>

      {images  &&  (
        <div className='flex justify-center items-center col-span-2 overflow-hidden w-[18rem] h-[18rem] shadow-xl bg-red'>
          <img src={images} alt={productItem?.title} className='object-cover w-full h-full' />
        </div>
      )}
    </div>
  );
};

export default ProductImages;
