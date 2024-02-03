"use client";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

const FormModalContext = createContext<{
  isOpen: boolean;
  open: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  open: () => {},
  setOpen: () => {},
});

export const useFormModal = () => {
  return useContext(FormModalContext);
};

export const FormModalContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);

  return (
    <FormModalContext.Provider
      value={{
        isOpen,
        open,
        setOpen: setIsOpen,
      }}
    >
      {children}
    </FormModalContext.Provider>
  );
};
