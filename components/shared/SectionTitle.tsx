interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <div className='space-y-5'>
      <div className='space-y-1'>
        <p className='text-orange/90 text-lg'>{subtitle}</p>
        <h2 className='capitalize text-5xl text-dark font-semibold'>{title}</h2>
      </div>
      <p className='w-3/4 text-[1rem]'>{description}</p>
    </div>
  );
};

export default SectionTitle;
