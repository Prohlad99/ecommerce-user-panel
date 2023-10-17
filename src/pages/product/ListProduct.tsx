import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';
import Swal from 'sweetalert2';
import Modal from '../../components/shared/Modal';
import ProductOne from '../../images/product/product-01.png';
import AddProduct from './AddProduct';
import ProductDetails from './ProductDetails';

const ListProduct = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isProductUpdate, setIsProductUpdate] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleProductUpdateModalOpen = () => {
    setIsProductUpdate(true);
  };
  const handleProductUpdateModalClose = () => {
    setIsProductUpdate(false);
  };

  const deleteAlart = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>
      {/*product details modal  */}
      <div>
        {isOpenModal && (
          <Modal
            handleCloseModal={handleCloseModal}
            component={<ProductDetails />}
          />
        )}
      </div>
      {/*product update modal  */}
      <div>
        {isProductUpdate && (
          <Modal
            handleCloseModal={handleProductUpdateModalClose}
            component={<AddProduct />}
          />
        )}
      </div>
      <div className="grid grid-cols-9 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center justify-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex justify-center">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">In Stock</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">View All</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Actions</p>
        </div>
      </div>

      <div className="grid grid-cols-9 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={ProductOne} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">
              Apple Watch Series 7
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex justify-center">
          <p className="text-sm text-black dark:text-white">Electronics</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm text-black dark:text-white">$269</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm text-black dark:text-white">22</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <button onClick={handleOpenModal} className="text-[20px]">
            <FiMoreHorizontal />
          </button>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <div className="text-[20px]">
            <button
              onClick={handleProductUpdateModalOpen}
              className="text-success"
            >
              <BiEdit />
            </button>
            <button onClick={deleteAlart} className="text-danger">
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={ProductTwo} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">Macbook Pro M1</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Electronics</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">$546</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">34</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$125</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={ProductThree} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">
              Dell Inspiron 15
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Electronics</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">$443</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">64</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$247</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={ProductFour} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">HP Probook 450</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Electronics</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">$499</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">72</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$103</p>
        </div>
      </div> */}
    </div>
  );
};

export default ListProduct;
