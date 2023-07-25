"use client";
import React, { KeyboardEvent, ReactNode } from "react";

interface Props {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ open, onClose, children }: Props) => {
  if (!open) return null;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#171616] bg-opacity-50 z-[999]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="p-8 bg-black w-3/4 md:w-2/5 rounded-md relative shadow-sm shadow-[#ccc] border"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <button
          className="absolute right-4 top-2 text-2xl outline-none focus:border"
          onClick={onClose}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
