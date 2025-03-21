import React from "react";
/** @jsxImportSource react */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-999 inset-0 flex items-center justify-center  bg-opacity-50">
      <div className="bg-transparent border border-[#C3EB2F] p-6 rounded-lg shadow-lg relative backdrop-blur-lg backdrop-filter">
        <button
          className="absolute text-xl top-2 right-2  text-white hover:text-[red] "
          onClick={onClose}
        >
          ❌
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
