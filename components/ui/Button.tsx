import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariance = cva(
  'inline-block text-center px-6 py-2 rounded-lg border font-medium active:scale-105 eq',

  {
    variants: {
      variant: {
        dark: 'border-dark bg-dark text-white hover:border-dark-700/90 hover:bg-dark-700/90 ',
        outline:
          'border-dark bg-transparent text-dark hover:bg-dark hover:text-white',
        ghost:
          'border-transparent bg-transprarnt  text-dark hover:border-gray hover:bg-gray',
        rose: 'border-red bg-red text-white hover:bg-red/90 hover:border-red/90',
        love: 'border-pink bg-pink text-dark hover:border-pink/90 hover:bg-pink/90',
        halloween:
          'border-orange bg-orange text-dark hover:border-orange/90 hover:bg-orange/90',
        success:
          'border-green bg-green text-dark hover:border-green/90 hover:bg-green/90',
        ocen: 'border-blue bg-blue text-dark hover:border-blue/90 hover:bg-blue/90',
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
    VariantProps<typeof buttonVariance> {}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  disabled,
  onClick,
  variant,
  size,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(buttonVariance({ variant, size }))}
    >
      {children}
    </button>
  );
};

export default Button;