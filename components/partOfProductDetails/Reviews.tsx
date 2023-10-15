import { productDataType } from "@/types/product.type";
import {} from "react-icons";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
interface ReviewsProps {
  review: productDataType;
}

const Reviews: React.FC<ReviewsProps> = ({ review }) => {
  const makeReviews = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {review?.rating >= index + 1 ? (
          <FaStar />
        ) : review?.rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className='flex justify-start items-center'>
      <h2 className='flex justify-start items-center text-lg text-orange/70'>
        {makeReviews}
      </h2>
      
    </div>
  );
};

export default Reviews;
