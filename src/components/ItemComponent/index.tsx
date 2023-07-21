"use client";
import Image from "next/image";
import * as S from "./style";
import AddCart from "@/assets/AddCart.svg";
import Link from "next/link";
import { ProductProps } from "@/interfaces/getProductInterface.interface";
import { useContext } from "react";
import CartContext from "@/contexts/CartContext";

type ItemComponentProps = {
  product: ProductProps;
};

export default function ItemComponent({ product }: ItemComponentProps) {
  const { handleAddToCart } = useContext(CartContext);
  const { title, price, description, images, _id } = product;

  return (
    <S.ProductContainer>
      <S.ContainerImage>
        <Link href={`/product/${_id}`}>
          {images[0].url && (
            <Image
              alt="ola"
              src={images[0].url}
              width={product.category.title === "laptops" ? 300 : 160}
              height={200}
            />
          )}
        </Link>
      </S.ContainerImage>
      <S.InfoContainer>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <span>${price}</span>
          <button onClick={() => handleAddToCart(product)}>
            <Image alt="adiconar ao carrinho" src={AddCart} />
          </button>
        </div>
      </S.InfoContainer>
    </S.ProductContainer>
  );
}
