import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariance } from "../ui/Button";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  btn?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  btn,
}) => {
  return (
    <div className='space-y-5'>
      <div className="space-y-1">
        <p className='text-orange/90 text-sm'>{subtitle}</p>
        <h2 className='capitalize text-xl font-semibold'>{title}</h2>
      </div>
      <p className='w-3/4'>{description}</p>

      <Link
        href='/products'
        className={cn(buttonVariance({ variant: "halloween" }))}
      >
        {btn}
      </Link>
    </div>
  );
};

export default SectionTitle;
