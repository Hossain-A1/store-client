import { productDataType } from "@/types/product.type";
import SectionTitle from "../shared/SectionTitle";
import HorizontalTab from "../ui/HorizontalTab";
import { data } from "../../data/productsData";
import ProductItem from "./ProductItem";


interface ProductsProps {
  fromProductPage?: boolean;
}

const Products: React.FC<ProductsProps> = ({ fromProductPage }) => {
  return (
    <div className='wrapper'>
      <SectionTitle subtitle='visual' title='products' />
      <HorizontalTab tabs={["clectonic", "beauty", "books"]} >

      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {!fromProductPage &&
            data
              .filter(
                (item: productDataType) => item.masterCategory === 'Makeup Artistry'
              )
              .sort((a: productDataType, b: productDataType) => a.price - b.price)
              .slice(0, 4)
              .map((item: productDataType) => (
                <ProductItem key={item.id} productData={item} />
              ))}
          {fromProductPage &&
            data
              .filter(
                (item: productDataType) => item.masterCategory === 'Makeup Artistry'
              )
              .sort((a: productDataType, b: productDataType) => a.price - b.price)
              .map((item: productDataType) => (
                <ProductItem key={item.id} productData={item} />
              ))}
      </div>

      </HorizontalTab>
    </div>
  );
};

export default Products;
