import { productDataType } from "@/types/product.type";
import Image from "next/image";
import { useState } from "react";
interface ProductItemProps {
  productItem: productDataType;
}
const ProductImages: React.FC<ProductItemProps> = ({ productItem }) => {
  const [images, setImages] = useState(productItem?.images[0]);

  
  return (
    <div className='  grid grid-cols-4 gap-5 section-p'>
      <div className='flex flex-col  items-start gap-5  '>
        {productItem?.images.map((image, i) => (
          <figure key={i} className='w-[4rem] h-[4rem]  '>
            <Image
              src={image}
              priority
              width={400}
              height={600}
              alt={productItem.title}
              onClick={() => setImages(image)}
              className='cursor-pointer object-cover w-full h-full  '
            />
          </figure>
        ))}
      </div>

      {images && (
        <div className='flex justify-center items-center col-span-3 overflow-hidden w-full h-full shadow-xl '>
          <Image
            src={images}
            priority
            width={1080}
            height={740}
            alt={productItem?.title}
            className='object-cover w-full h-full'
          />
        </div>
      )}
    </div>
  );
};

export default ProductImages;
