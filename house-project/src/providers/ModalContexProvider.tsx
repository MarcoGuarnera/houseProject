import { createContext, ReactNode, useMemo, useState } from "react";

export interface ModalContextType {
  modalOpened: boolean;
  setModalOpened: (opened: boolean) => void;
}

export const ModalContext = createContext<ModalContextType>({
  modalOpened: false,
  setModalOpened() {
    return;
  },
});

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      modalOpened: modalOpened,
      setModalOpened(opened: boolean) {
        setModalOpened(opened);
      },
    }),
    [modalOpened]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
