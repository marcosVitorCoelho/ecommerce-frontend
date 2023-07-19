"use client";
import ProductsInfoContext from "@/contexts/ProductsInfoContext";
import { GetProductProps } from "@/interfaces/getProductInterface.interface";
import { useParams } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";

export default function Product() {
  const { getProductInfo } = useContext(ProductsInfoContext);
  const [productInfo, setProductInfo] = useState<GetProductProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = useParams();

  const handleProductInfo = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getProductInfo(params.id);
      const { data } = response;
      setProductInfo(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    handleProductInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        productInfo && <p>{productInfo?.title}</p>
      )}
    </div>
  );
}
