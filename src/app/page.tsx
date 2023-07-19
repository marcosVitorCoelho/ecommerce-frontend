"use client";
import { useState, useContext } from "react";
import * as S from "./style";
import { Box, FormControl, Grid, InputLabel } from "@mui/material";
import ItemComponent from "@/components/ItemComponent";
import ProductsInfoContext from "@/contexts/ProductsInfoContext";
import Link from "next/link";

export default function Home() {
  const { products, isLoading } = useContext(ProductsInfoContext);
  const [searchItem, setSearchItem] = useState("");

  const filteredItems = products!.filter(
    (item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      item.category.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <S.ContainerPage>
      <S.Container>
        <S.SearchBox>
          <FormControl>
            <InputLabel shrink htmlFor="custom-search">
              Search Item
            </InputLabel>
            <S.BootstrapInput
              onChange={(ev) => setSearchItem(ev.target.value)}
              id="custom-search"
              placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
            />
          </FormControl>
        </S.SearchBox>
        {!isLoading ? (
          <Box sx={{ flexGrow: 1 }} justifyContent={"center"}>
            <Grid
              container
              spacing={1}
              columns={{ xs: 4, sm: 8, md: 16 }}
              justifyContent="center"
            >
              {products &&
                filteredItems!.map((product) => {
                  return (
                    <Grid
                      item
                      xs={2}
                      sm={4}
                      md={filteredItems.length === 1 ? 8 : 4}
                      key={product._id}
                      maxWidth={"100% !important"}
                    >
                      <ItemComponent product={product} />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        ) : (
          <p>Loading...</p>
        )}
      </S.Container>
    </S.ContainerPage>
  );
}
