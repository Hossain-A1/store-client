import { ScaleLoader } from 'react-spinners';
interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div className='flex justify-center'>
      <ScaleLoader
        color='#32B8CB'
        loading={isLoading}
        aria-setsize={24}
        data-testid='loder'
        aria-label='Loading Spinner'
      />
    </div>
  );
};

export default Loading;
