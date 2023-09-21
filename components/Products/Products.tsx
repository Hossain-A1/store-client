import SectionTitle from "../shared/SectionTitle"
import HorizontalTab from "../ui/HorizontalTab"

interface ProductsProps {
  fromProductPage?:boolean
}

const Products: React.FC<ProductsProps> = ({fromProductPage}) => {
  return (
    <div className="wrapper">
      <SectionTitle subtitle="visual" title="products"/>
      <HorizontalTab tabs={['clectonic','beauty','books']}/>
    </div>
  )
}

export default Products