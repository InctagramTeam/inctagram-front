import { useEffect, useRef, useState } from "react";

export const useAlert = () => {
  const [open, isOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      isOpen(false);
    }
  };
  const closeHandler = () => isOpen(false);

  return { closeHandler, modalRef, open };
};
