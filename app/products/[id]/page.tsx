"use client"
import ProductImages from "@/components/partOfProductDetails/ProductImages"
import Error from "@/components/shared/Error"
import Loading from "@/components/shared/Loading"
import useFetch from "@/hooks/use-fetch"

const ProductDetailsPage = ({params}:{params:{id:string}}) => {

  const {data:productItem,error,isLoading} = useFetch(`/api/products/${params.id}`)

  return (
    <main className="wrapper section-p">
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

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">

<div className="images">
<ProductImages productItem={productItem}/>
</div>

<div className="details">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, necessitatibus sed obcaecati aliquam eius cumque ipsa quas maiores molestias quos, dignissimos modi officia incidunt iusto aspernatur magnam? Iure, illo obcaecati.
</div>
      </div>

    </main>
  )
}

export default ProductDetailsPage