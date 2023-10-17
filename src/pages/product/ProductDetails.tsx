import product1 from '../../images/product/product-01.png';
import product2 from '../../images/product/product-02.png';
import product3 from '../../images/product/product-03.png';
import product4 from '../../images/product/product-04.png';

const ProductDetails = () => {
  return (
    <div className="max-w-[600px] mx-auto  bg-white rounded-md p-4">
      <div className="grid grid-cols-2  px-4 py-2 rounded-md gap-2 justify-between border-b-[1.5px] border-stroke">
        <div className="flex flex-col justify-start">
          <h2 className="font-bold">Product Name:</h2>
          <p>Mens Shirt</p>
        </div>
        <div className="flex flex-col justify-end justify-self-end text-end ">
          <h2 className="font-bold">Product Code:</h2>
          <p>#34292</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 justify-between  border-b-[1.5px] border-stroke  px-4 py-2 rounded-md">
        <div className="flex flex-col justify-end justify-self-start text-start ">
          <h2 className="font-bold">Quantity:</h2>
          <p>50</p>
        </div>
        <div className="flex flex-col justify-end justify-self-end text-end ">
          <h2 className="font-bold">Buying Price:</h2>
          <p>500/-</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2  px-4 py-2 rounded-md justify-between  border-b-[1.5px] border-stroke">
        <div className="flex flex-col justify-end justify-self-start text-start ">
          <h2 className="font-bold">Regular Price*:</h2>
          <p>500</p>
        </div>
        <div className="flex flex-col justify-end justify-self-end text-end ">
          <h2 className="font-bold">Offer:</h2>
          <p>Yes</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 justify-between  border-b-[1.5px] border-stroke  px-4 py-2 rounded-md">
        <div className="flex flex-col justify-end justify-self-start text-start ">
          <h2 className="font-bold">Offer Price:</h2>
          <p>500</p>
        </div>
        <div className="flex flex-col justify-end justify-self-end text-end ">
          <h2 className="font-bold">Offer End Date:</h2>
          <p>10/20/2023</p>
        </div>
      </div>

      <div className="flex flex-col justify-end  px-4 py-2 rounded-md justify-self-start text-start border-b-[1.5px] border-stroke py-2">
        <div>
          <h2 className="font-bold">Category:</h2>
          <p>Mens Shirt</p>
        </div>
      </div>
      <div className="flex justify-between  border-b-[1.5px] border-stroke  px-4 py-2 rounded-md">
        <div>
          <h2 className="font-bold">Product Details:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eum
            autem itaque dolores sequi, consectetur quas, facere error iure
            earum ducimus quo ipsum odit culpa. Minus alias distinctio facere
            accusamus.
          </p>
        </div>
      </div>
      <div className="flex justify-between  border-b-[1.5px] border-stroke  px-4 py-2 rounded-md">
        <div>
          <h2 className="font-bold">Delivery Details:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eum
            autem itaque dolores sequi, consectetur quas, facere error iure
            earum ducimus quo ipsum odit culpa. Minus alias distinctio facere
            accusamus.
          </p>
        </div>
      </div>
      <div className="flex justify-between  border-b-[1.5px] border-stroke  px-4 py-2 rounded-md">
        <div>
          <h2 className="font-bold">Return & Refund Policy:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eum
            autem itaque dolores sequi, consectetur quas, facere error iure
            earum ducimus quo ipsum odit culpa. Minus alias distinctio facere
            accusamus.
          </p>
        </div>
      </div>
      <div className="flex justify-between  border-b-[1.5px] border-stroke py-2">
        <div>
          <h2 className="font-bold">Product Images:</h2>
          <div className="grid grid-cols-4 gap-2 justify-center w-full items-center mx-auto">
            <div>
              <img src={product1} alt="" />
            </div>
            <div>
              <img src={product2} alt="" />
            </div>
            <div>
              <img src={product3} alt="" />
            </div>
            <div>
              <img src={product4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
