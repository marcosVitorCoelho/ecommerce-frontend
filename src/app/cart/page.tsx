/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useContext } from "react";
import * as S from "./style";
import CartContext from "@/contexts/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import ItemCartComponent from "@/components/ItemCartComponent";
import { Divider } from "@mui/material";
import Image from "next/image";
import Bag from "@/assets/Bag.svg";
import Link from "next/link";

export default function Cart() {
  const { calculateTotalPrice, cartItems, handleClearCart } =
    useContext(CartContext);

  return (
    <S.ContainerPage>
      <S.Container>
        <S.TitleContainer>
          <h1>Check your Bag Items</h1>
        </S.TitleContainer>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <div
                key={item._id}
                style={{
                  gap: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ItemCartComponent item={item} />
                <S.Divider />
              </div>
            );
          })
        ) : (
          <p>Tá vazio, bicho. Compra aí na moral.</p>
        )}
      </S.Container>
      <Divider orientation="vertical" flexItem />
      <S.BagContainer>
        <h2>Clear cart</h2>
        <button onClick={() => handleClearCart()}>
          <DeleteIcon color="error" />
        </button>
        <h2>Bag Total: ${calculateTotalPrice().toFixed(2)}</h2>
        <Link href={'/tbjn'}>
          <Image src={Bag} alt="Bag icon" />
        </Link>
      </S.BagContainer>
    </S.ContainerPage>
  );
}
