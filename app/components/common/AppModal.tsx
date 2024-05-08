"use client";
import { constants } from "@/app/constant";
import React, { useState, useRef } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  component: any;
  form: any;
}

const AppModal = ({ component, isOpen = false, onClose, form }: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setShowModal(false);
    onClose?.();
  };

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Element)
    ) {
      handleClose();
    }
  };

  return (
    <>
      {component}
      {isOpen && (
        <div
          className="fixed flex inset-0 z-50 overflow-y-auto bg-[rgba(0,0,0,0.2)]  p-4 md:p-8 items-center justify-center"
          onClick={handleClickOutside}
        >
          <div
            className="relative rounded-lg shadow dark:bg-gray-800 mx-auto w-full max-w-3xl md:max-w-2xl"
            ref={modalRef}
          >
            <button
              type="button"
              className="absolute top-3 right-2.5 px-4 py-2 text-xs font-medium text-gray-700 bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-none"
              onClick={handleClose}
            >
              Close
            </button>
            <div className="p-6 mt-8 h-fit">{form}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppModal;
