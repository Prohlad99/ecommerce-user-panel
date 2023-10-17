import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RxCross2 } from 'react-icons/rx';

const AddProduct = () => {
  const [endDate, setEndDate] = useState(new Date());
  const [isOffer, setIsOffer] = useState('');
  const [offerPrice, setOfferPrice] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = '';
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  const handleOfferChange = (e) => {
    setIsOffer(e.target.value);
    if (isOffer === 'yes') {
      setOfferPrice(true);
    }
    if (isOffer === 'no') {
      setOfferPrice(false);
    }
    console.log(isOffer, offerPrice);
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* <!-- Contact Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Add Product
          </h3>
        </div>
        <form onSubmit={handleAddProduct} action="#">
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Product name<span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter product name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Product Code<span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter product code"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Quantity<span className="text-meta-1">*</span>
                </label>
                <input
                  type="number"
                  required
                  placeholder="Product Quantity"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Buying Price<span className="text-meta-1">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Buying price"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Regular Price<span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Regular price"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Offer Price<span className="text-meta-1">*</span>
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select
                    onChange={handleOfferChange}
                    required
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {offerPrice ? (
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Offer <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Offer Price"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Offer End<span className="text-meta-1">*</span>
                  </label>
                  <DatePicker
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    required={true}
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
              </div>
            ) : null}

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Category <span className="text-meta-1">*</span>
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                  <option value="">Select Product Category </option>
                  <option value="">Women & Girls Fashion </option>
                  <option value="">Watch&apos;s Bags & Jewellery</option>
                  <option value="">Kid&apos;s & Men&apos;s Fashion</option>
                  <option value="">Kitchen Products</option>
                  <option value="">Household & Outdoor</option>
                  <option value="">TC & Home Appliences</option>
                  <option value="">Electronic Accessories </option>
                  <option value="">Gadget & Accessories</option>
                </select>
                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block text-black dark:text-white">
                Product Details <span className="text-meta-1">*</span>
              </label>
              <textarea
                rows={3}
                required
                placeholder="Write product details"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block text-black dark:text-white">
                Delivery Details<span className="text-meta-1">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder="Write delivery details"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block text-black dark:text-white">
                Return & Refund Policy<span className="text-meta-1">*</span>
              </label>
              <textarea
                rows={3}
                placeholder="Write Return & Refund Policy"
                required
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              ></textarea>
            </div>

            <div className="mb-6 border-[1.5px] border-stroke bg-transparent grid grid-cols-12">
              <div className="col-span-4 border-[1px] border-stroke rounded-md ml-2 p-2">
                <label className="mb-2.5 block text-black dark:text-white">
                  <span className="text-[15px]">+ Add Images</span>
                  <br />
                  <span className="text-[15px] my-1">up to 4 images</span>
                  <br />
                  <input
                    type="file"
                    name="images"
                    onChange={onSelectFile}
                    multiple
                    accept="image/png , image/jpeg, image/webp"
                  />
                </label>
              </div>
              <div className="col-span-8">
                <div className="images flex gap-2">
                  {selectedImages &&
                    selectedImages.map((image, index) => {
                      return (
                        <div
                          key={image}
                          className="image border-[1px] relative"
                        >
                          <img src={image} className="h-[100px]" alt="upload" />
                          <button
                            className="text-[16px] absolute -top-2 -right-2 bg-danger text-white rounded-full"
                            onClick={() => deleteHandler(image)}
                          >
                            <RxCross2 />
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
