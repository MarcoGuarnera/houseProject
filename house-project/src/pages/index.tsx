import { GetServerSideProps } from "next";
import ProductPage from "@/components/product/ProductPage";
import { AppContext } from "@/providers/AppContextProvider";
import { HouseProduct, MappedHouseProduct } from "@/utiles/types/types";
import { useMemo, useState } from "react";
import { mapHouseProduct } from "@/utiles/mapHouseProduct";

export default function HomePage({
  mappedInitialData,
}: Readonly<{ mappedInitialData: MappedHouseProduct }>) {
  const [houseData] = useState<MappedHouseProduct | null>(mappedInitialData);

  const contextValue = useMemo(
    () => ({
      houseData,
    }),
    [houseData]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <ProductPage />
    </AppContext.Provider>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(
      "http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/76666a29898f491480386d966b75f949/koop/b122557e-1be2-4271-85e3-eca2ce1038f9/"
    );
    if (response.status === 404) {
      return {
        notFound: true,
      };
    }
    const initialData: HouseProduct = await response.json();
    const mappedInitialData = mapHouseProduct(initialData);
    return { props: { mappedInitialData } };
  } catch (error) {
    return { props: { initialData: null } };
  }
};
