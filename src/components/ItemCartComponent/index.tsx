import * as S from "./style";
import Image from "next/image";
import Increase from "@/assets/Increase.svg";
import Decrease from "@/assets/Decrease.svg";
import CartContext from "@/contexts/CartContext";
import { useContext, useEffect, useState } from "react";
import { ProductProps } from "@/interfaces/getProductInterface.interface";

interface ItemCartComponent {
  item: ProductProps;
}

export default function ItemCartComponent({ item }: ItemCartComponent) {
  const {
    _id,
    images,
    description,
    price,
    title,
    slug,
    quantityInCart,
    category,
  } = item;

  const { handleUpdateQuantity, handleClearCart } = useContext(CartContext);

  return (
    <S.ProductContainer>
      <S.ContainerImage>
        {images[0].url && (
          <Image
            src={images[0].url}
            alt="imagem do aparelho"
            width={category.title === "laptops" ? 300 : 160}
            height={200}
          />
        )}
      </S.ContainerImage>
      <S.InfoContainer>
        <h1>{title}</h1>
        <span>{slug}</span>
        <p>{description}</p>
        <div>
          <p>Rating 4.5/5</p>
        </div>
        <S.TotalItemContainer>
          <span>
            ${price.toFixed(2)} x {quantityInCart}
          </span>
          <S.CountItems>
            <button
              onClick={() => handleUpdateQuantity(_id, quantityInCart - 1)}
            >
              <Image src={Decrease} alt="Decrease button" />
            </button>
            <span>{quantityInCart}</span>
            <button
              onClick={() => handleUpdateQuantity(_id, quantityInCart + 1)}
            >
              <Image src={Increase} alt="Increase button" />
            </button>
          </S.CountItems>
        </S.TotalItemContainer>
      </S.InfoContainer>
    </S.ProductContainer>
  );
}
