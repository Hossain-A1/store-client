import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export const buttonVariance= cva(
  'inline-block text-center px-6 py-2 rounded-md border font-medium active:scale-105 eq',

  {
    variants: {
      variant: {
        dark: 'border-dark bg-dark text-white hover:border-dark-700/90 hover:bg-dark-700/80 ',
        outline:
          'border-dark bg-transparent text-dark hover:bg-dark hover:text-white',
        ghost:
          'border-transparent bg-transprarnt  text-dark hover:border-gray hover:bg-gray',
        rose: 'border-red bg-red text-white hover:bg-red/90 hover:border-red/80',
        love: 'border-pink bg-pink text-dark hover:border-pink/90 hover:bg-pink/80',
        halloween:
          'border-orange bg-orange text-dark hover:border-orange/90 capitalize hover:bg-orange/80',
          orange:
          ' border text-sm border-orange bg-pink w-full text-dark hover:border-pink/90 hover:bg-pink/90',
        success:
          'border-green bg-green text-dark hover:border-green/90 hover:bg-green/80',
        ocen: 'border-blue bg-blue text-dark hover:border-blue/90 hover:bg-blue/80',
        violet:
          'border-violet bg-violet text-white hover:border-violet/90 hover:bg-violet/90',
      },
      size: {
        auto: 'w-auto',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'halloween',
      size: 'auto',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariance> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
  variant,
  size,
  isLoading,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      {...props}
      className={cn(
        buttonVariance({ variant, size }),
        isLoading && 'flex items-center justify-center gap-2.5',
      
      )}
    >
      {isLoading && <Loader2 size={20} className='animate-spin' />}
      {children}
    </button>
  );
};

export default Button;