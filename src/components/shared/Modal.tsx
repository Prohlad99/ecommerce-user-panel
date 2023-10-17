import { useEffect } from 'react';

const Modal = ({ handleCloseModal, component }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);
  return (
    <div>
      {/* modal wrapper */}
      <div
        onClick={handleCloseModal}
        className="fixed top-0 bottom-0 right-0 left-0 bg-bodydark2 opacity-90"
      ></div>
      {/* modal container  */}

      <div
        className="border-[1px] border-red-600 w-[550px] h-[500px] overflow-y-scroll fixed bg-white ml-[200px] -mt-[100px]"
        // style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <div className=" w-full h-full relative p-4">
          {/* component */}
          <div>{component}</div>
          <button
            className="absolute top-1 bg-danger text-white right-1 border-[1px] border-danger px-2 py-1 w-[30px] h-[30px] flex justify-center items-center rounded-full"
            onClick={handleCloseModal}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
