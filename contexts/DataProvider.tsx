import React, { useEffect, useState } from "react";

import {
  Category,
  Product,
  useGetOneProductQuery,
  useGetProductQuery,
} from "@/generated";

type Props = {
  children: React.ReactNode;
};

export type BasketItem = {
  product: Product;
  quantity: number;
};

type DataContextType = {
  products: Product[];
  categories: Category[];
  basketItems: BasketItem[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setBasketItems: React.Dispatch<React.SetStateAction<BasketItem[]>>;
  getProduct: (id: string) => void;
};
const DataContext = React.createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error, loading } = useGetProductQuery();
    };
    fetchProducts();
  }, []);
  const getProduct = (id: string) => {
    const { data, error, loading } = useGetOneProductQuery({
      variables: {
        getOneProductId: id as string,
      },
    });
  };
  return (
    <DataContext.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        basketItems,
        setBasketItems,
        getProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  return React.useContext(DataContext);
};
