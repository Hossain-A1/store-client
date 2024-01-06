import { TbTargetArrow } from "react-icons/tb";
import { SlGraph } from "react-icons/sl";
import { BiRevision } from "react-icons/bi";
const Mission = () => {
  return (
    <section className='grid lg:grid-cols-3 grid-cols-1 gap-5 bg-light px-5 py-10'>
      <div className='space-y-5'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <h2 className='text-4xl uppercase font-light italic'>Our mission</h2>
          <span>
            <TbTargetArrow className='text-4xl text-green' />
          </span>
        </div>

        <p className='font-light'>
          "At Nur, we embark on a mission that goes beyond the transactional
          nature of commerce. Our vision is to foster a community that values
          diversity, embraces individuality, and prioritizes conscious living.
          Through our carefully curated collection spanning clothing,
          electronics, and an array of quality products, we seek to nurture the
          unique essence of each customer. Our commitment extends to providing
          more than just a product; we offer an experience that resonates with
          your lifestyle. Every item in our store is a testament to our
          dedication to quality, sustainability, and affordability. We believe
          that the choices you make should not only cater to your immediate
          needs but also contribute to a richer, more meaningful life. At Nur,
          we celebrate the power of variety, recognizing that every person is a
          story waiting to be told. Through fashion that expresses your style
          and electronics that simplify your life, we invite you to explore,
          discover, and shape your narrative. Join us on this journey of
          self-expression, conscious consumption, and community building.
          Together, let's create a future where the act of shopping becomes a
          transformative experience, and every product carries the potential to
          shape a brighter tomorrow."
        </p>
      </div>

      <div className='space-y-5'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <h2 className='text-4xl uppercase font-light italic'>what we do</h2>
          <span>
            <SlGraph className='text-4xl text-gray' />
          </span>
        </div>

        <p className='font-light'>
          "At Nur, we embark on a mission that goes beyond the transactional
          nature of commerce. Our vision is to foster a community that values
          diversity, embraces individuality, and prioritizes conscious living.
          Through our carefully curated collection spanning clothing,
          electronics, and an array of quality products, we seek to nurture the
          unique essence of each customer. Our commitment extends to providing
          more than just a product; we offer an experience that resonates with
          your lifestyle. Every item in our store is a testament to our
          dedication to quality, sustainability, and affordability. We believe
          that the choices you make should not only cater to your immediate
          needs but also contribute to a richer, more meaningful life. Through
          fashion that expresses your style and electronics that simplify your
          life, we invite you to explore, discover, and shape your narrative.
          Join us on this journey of self-expression, conscious consumption, and
          community building. Together, let's create a future where the act of
          shopping becomes a transformative experience, and every product
          carries the potential to shape a brighter tomorrow."
        </p>
      </div>

      <div className='space-y-5'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <h2 className='text-4xl uppercase font-light italic'>Our vision</h2>
          <span>
            <BiRevision className='text-4xl text-green' />
          </span>
        </div>

        <p className='font-light'>
          Our vision is to continue being a beacon of curated excellence,
          offering a diverse range of products that elevate lifestyles. We
          strive to set new standards in quality, design, and sustainability,
          ensuring that each item we present reflects our commitment to
          excellence. As we shape tomorrow, Nur Store aspires to make a positive
          global impact. From ethical sourcing to sustainable practices, we
          envision a future where our actions contribute to a healthier planet
          and a more equitable society. Join us in our vision as we pave the way
          for a future where Nur Store is not just a retail destination but a
          catalyst for inspired living. Together, let's shape a tomorrow where
          every choice made at Nur is a step towards a more fulfilling and
          meaningful life.
        </p>
      </div>
    </section>
  );
};

export default Mission;
