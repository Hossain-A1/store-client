"use client";
import Redirect from "@/components/partOfProductDetails/Redirect";
import ProductDetails from "@/components/productDetails/ProductDetails";
import Error from "@/components/shared/Error";
import Loading from "@/components/shared/Loading";
import useFetch from "@/hooks/use-fetch";

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const {
    data: productItem,
    error,
    isLoading,
  } = useFetch(`/api/products/${params.id}`);

  return (
    <main className='container'>
      {isLoading && (
        <div className='flex h-[calc(100vh-5rem)] items-center justify-center'>
          <Loading isLoading={isLoading} />
        </div>
      )}
      {error && (
        <div className='flex h-[calc(100vh-5rem)] items-center justify-center'>
          <Error error={error.message} />
        </div>
      )}

      {!isLoading && (
        <div className='container section-p'>
          <Redirect />
          <ProductDetails productItem={productItem} isLoading={isLoading} />
        </div>
      )}
    </main>
  );
};

export default ProductDetailsPage;
