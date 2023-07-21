/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import ProductsInfoContext from "@/contexts/ProductsInfoContext";
import { ProductProps } from "@/interfaces/getProductInterface.interface";
import { useParams } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import * as S from "./style";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AddCart from "@/assets/AddCart.svg";
import CartContext from "@/contexts/CartContext";

export default function Product() {
  const { handleAddToCart } = useContext(CartContext);
  const { getProductInfo } = useContext(ProductsInfoContext);
  const [productInfo, setProductInfo] = useState<ProductProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = useParams();
  const router = useRouter();

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
  }, []);

  return (
    <S.ContainerPage>
      <S.Container>
        {!isLoading && productInfo ? (
          <>
            <S.ButtonContainer>
              <S.CustomButton onClick={() => router.back()}>
                <ArrowBackIosNewRoundedIcon />
                Back
              </S.CustomButton>
            </S.ButtonContainer>
            <S.ProductContainer>
              <S.ContainerImage>
                <Image
                  src={productInfo.images[0].url}
                  alt="imagem do aparelho"
                  width={productInfo.category.title === "laptops" ? 300 : 200}
                  height={220}
                />
              </S.ContainerImage>
              <S.InfoContainer>
                <h1>{productInfo.title}</h1>
                <span>{productInfo.slug}</span>
                <div>
                  <div>Rating</div>
                  <p>4.5/5</p>
                </div>
                <span>${productInfo.price}</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                  maxime voluptatem ipsa quis quidem! Qui explicabo, ipsam
                  necessitatibus veniam consequatur ipsum cupiditate omnis
                  dolores voluptas iure itaque. Fugiat, harum consectetur.
                </p>
                <S.ButtonCartContainer>
                  <button>
                    <Image alt="adiconar ao carrinho" src={AddCart} />
                  </button>
                </S.ButtonCartContainer>
              </S.InfoContainer>
            </S.ProductContainer>
            <S.Divider></S.Divider>
            <S.DescriptionContainer>
              <div>
                <h2>Description</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                maxime voluptatem ipsa quis quidem! Qui explicabo, ipsam
                necessitatibus veniam consequatur ipsum cupiditate omnis dolores
                voluptas iure itaque. Fugiat, harum consectetur.Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Cum maxime
                voluptatem ipsa quis quidem! Qui explicabo, ipsam necessitatibus
                veniam consequatur ipsum cupiditate omnis dolores voluptas iure
                itaque. Fugiat, harum consectetur..Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Cum maxime voluptatem ipsa quis
                quidem! Qui explicabo, ipsam necessitatibus veniam consequatur
                ipsum cupiditate omnis dolores voluptas iure itaque. Fugiat,
                harum consectetur..Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Cum maxime voluptatem ipsa quis quidem! Qui
                explicabo, ipsam necessitatibus veniam consequatur ipsum
                cupiditate omnis dolores voluptas iure itaque. Fugiat, harum
                consectetur..Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Cum maxime voluptatem ipsa quis quidem! Qui explicabo,
                ipsam necessitatibus veniam consequatur ipsum cupiditate omnis
                dolores voluptas iure itaque. Fugiat, harum consectetur.Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Cum maxime
                voluptatem ipsa quis quidem! Qui explicabo, ipsam necessitatibus
                veniam consequatur ipsum cupiditate omnis dolores voluptas iure
                itaque. Fugiat, harum consectetur.
              </p>
            </S.DescriptionContainer>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </S.Container>
    </S.ContainerPage>
  );
}
