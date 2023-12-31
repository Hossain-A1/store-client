import { productDataType } from "@/types/product.type";
import { CurrencyFormatter } from "../shared/CurrencyFormatter";
import { TbTruckDelivery } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { buttonVariance } from "../ui/Button";
interface CheckOutProps {
  items: productDataType[];
}

const CheckOut: React.FC<CheckOutProps> = ({ items }) => {
  const total = () => {
    const calcTotal = items.reduce(
      (acc, item) => (acc += item.price * item.count ),
      0
    );
    const fixedTotal = +calcTotal.toFixed(2) + 17;
    const subtotal = <CurrencyFormatter amount={fixedTotal} />;

    return subtotal;
  };
  return (
    <section>
      <div className='border py-3 mt-5'>
        <h2 className='font-medium text-sm px-3 mt-2'>Order Summary</h2>
        <div className='py-3 px-3'>
          {items.map((item) => (
            <div>
              <div className=''>
                <div className='flex justify-between space-y-1'>
                  <h3 className='text-sm text-gray'>
                    {item.title.substring(0, 25)}..
                  </h3>
                  <h3 className='text-sm text-gray'>
                    {<CurrencyFormatter amount={item.price * item.count} />}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=' border-t space-y-3 px-3 py-3'>
          <div className='flex justify-between'>
            <h3 className='text-sm text-gray'>Delivery charge</h3>
            <h3 className='text-sm text-gray'>
              {<CurrencyFormatter amount={17} />}
            </h3>
          </div>

          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <span>
                {" "}
                <TbTruckDelivery className='text-sm text-gray ' />
              </span>
              <h2 className='text-sm text-dark '> Nur Express</h2>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-sm text-gray '>
                {" "}
                <CiLocationOn className='text-sm text-gray ' />
              </span>
              <h4 className='flex gap-1 text-sm text-gray'>
                Deliver to <u className='text-dark'>Dammam Saudi Arab</u>
              </h4>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-3 py-3 border-t">
          <h2>Order Total</h2>
          <strong className="text-xl">= {total()}</strong>
        </div>

        <div className="px-3 py-3 space-y-1">
          <input type="text" className="py-2 px-2 bg-orange/30 text-center border border-gray rounded w-full" placeholder="Add  coupon code here" required />
          <button className={cn(buttonVariance({variant:"success",size:'full'}) )} >Checkout</button>

        </div>
      </div>
    </section>
  );
};

export default CheckOut;
