import { MappedHouseProduct } from "@/utiles/types/types";
import { createContext, ReactNode, useMemo } from "react";

export interface AppContextType {
  houseData: MappedHouseProduct | null;
}

export const AppContext = createContext<AppContextType>({
  houseData: null,
});
export const AppContextProvider = ({
  children,
  initialData,
}: {
  children: ReactNode;
  initialData: MappedHouseProduct;
}) => {
  const contextValue = useMemo(
    () => ({
      houseData: initialData,
    }),
    [initialData]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
