import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed  w-full inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg relative md:w-[30%] ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-300 p-1 rounded-full"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
