
interface SectionTitleProps  {
  subtitle:string,
  title:string,
  description?:string
}




const SectionTitle: React.FC<SectionTitleProps>  = ({subtitle,title,description}) => {
  return (
    <div>
      <p className="text-orange/90 text-sm">{subtitle}</p>
      <h2 className="capitalize text-xl font-semibold">{title}</h2>
      <p className="w-3/4">
        {description}
      </p>
    </div>
  )
}

export default SectionTitle