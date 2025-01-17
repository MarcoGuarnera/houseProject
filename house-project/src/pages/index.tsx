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
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/mockedMappedData`
    );

    if (!response.ok) {
      // Handle HTTP errors
      if (response.status === 404) {
        return {
          notFound: true, // Automatically renders the 404 page
        };
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }

    // Old behavior with true data
    // const initialData: HouseProduct = await response.json();
    // const mappedInitialData = mapHouseProduct(initialData);

    const mappedInitialData: MappedHouseProduct = await response.json();
    return { props: { mappedInitialData } };
  } catch (error) {
    console.error("Error fetching house data:", error);
    return {
      redirect: {
        destination: "/500", // Redirects to a custom 500 error page
        permanent: false,
      },
    };
  }
};
