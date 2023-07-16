import { apiBase } from "@/services/api";
import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { GetProductProps } from "@/interfaces/getProductInterface.interface";

type RequestProps = {
  data: GetProductProps[];
};

interface ProductsInfoContextType {
  products: GetProductProps[] | undefined;
  isLoading: boolean;
}

interface ProductsInfoContextProps {
  children: ReactNode;
}

const ProductsInfoContext = createContext({} as ProductsInfoContextType);

const ProductsInfoProvider: React.FC<ProductsInfoContextProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<GetProductProps[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts: () => Promise<RequestProps> = async () => {
    const response = await apiBase.get<RequestProps>(
      "/product?page=1&limit=10"
    );
    return response;
  };

  const handleGetProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getProducts();
      const { data } = response;

      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  return (
    <ProductsInfoContext.Provider
      value={{ products: products, isLoading: isLoading }}
    >
      {children}
    </ProductsInfoContext.Provider>
  );
};

export default ProductsInfoContext;
export { ProductsInfoProvider };
