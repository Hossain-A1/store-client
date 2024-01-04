"use client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import { CurrencyFormatter } from "../shared/CurrencyFormatter";
import {
  clearCart,
  decrementItem,
  incrementItem,
  removeCart,
} from "@/redux/features/carts/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);

  const total = () => {
    const calcTotal = cartItems.reduce(
      (acc, item) => (acc += item.price * item.count),
      0
    );
    const fixedTotal = +calcTotal.toFixed(2);
    const subtotal = <CurrencyFormatter amount={fixedTotal} />;

    return subtotal;
  };

  return (
    <section className='container section-p mt-10 space-y-5'>
      <h2 className='text-center text-2xl font-semibold'>"Shopping Cart"</h2>
      <h2 className='text-center text-xl font-semibold'>
        {cartItems.length >= 1
          ? ` You've added (${cartItems.length}) Cart`
          : "No items in your shopping cart yet."}
      </h2>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 '>
        <div className='col-span-2 w-full space-y-5'>
          <ul className='grid grid-cols-4 border-b'>
            <li className='col-span-2'>Item</li>
            <li className='text-end'>Quantity</li>
            <li className='text-end'>Item total</li>
          </ul>

          <div className='w-full space-y-5 '>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className='grid grid-cols-3 w-full border-b pb-5'
              >
                <div className='flex gap-5 w-full col-span-2'>
                  <div className='w-24 h-24 overflow-hidden'>
                    <Image
                      src={item.images[0]}
                      alt={item.category}
                      width={400}
                      height={200}
                      priority
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h2 className='whitespace-pre-wrap'>
                      {item.title.substring(0, 30)}
                    </h2>
                    <span className='text-xs font-medium'>
                      ID: {item._id.substring(0, 10)}
                    </span>
                    <span className='text-xs font-medium'>
                      Price: {<CurrencyFormatter amount={item.price} />}
                    </span>
                    <span className='text-xs font-medium'>
                      Category: {item.category}
                    </span>
                  </div>
                </div>

                <div className='flex justify-between'>
                  <div className='flex  gap-3'>
                    <span
                      className=' px-2 bg-gray/40 h-7 cursor-pointer  font-bold text-xl'
                      onClick={() => dispatch(decrementItem(item._id))}
                    >
                      -
                    </span>
                    <span className=' px-2 bg-gray/10 h-7 text-orange  font-bold text-xl'>
                      {item.count}
                    </span>
                    <span
                      className=' px-2 bg-gray/40 h-7 cursor-pointer  font-bold text-xl'
                      onClick={() => dispatch(incrementItem(item._id))}
                    >
                      +
                    </span>
                  </div>
                  <div className='flex flex-col justify-between items-end'>
                    <span className='text-end'>
                      <CurrencyFormatter amount={item.price * item.count} />
                    </span>
                    <button
                      onClick={() => dispatch(removeCart(item._id))}
                      className='cursor-pointer text-gray border border-red p-2 rounded-full text-xl'
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* for checkout */}
        <div className='checkout'></div>
      </div>

      <div className='w-4/5'>
        <span className='uppercase text-center block'>
          Grand Total: <strong className='font-bold text-xl'>{total()}</strong>{" "}
        </span>
        <p className='text-center '>
          "The displayed product prices on our site already account for added
          taxes."
        </p>
      </div>
    </section>
  );
};

export default Cart;
