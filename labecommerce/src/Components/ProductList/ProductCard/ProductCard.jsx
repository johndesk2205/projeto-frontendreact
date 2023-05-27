import React from "react";
import { StyledProduct } from "./ProductCardStyle";


export default function ProductCard({ addToCart, product }) {


    return (
        <>
            <StyledProduct>
                <img src={product.imageUrl} />
                <div className="infosCard">
                    <h3>{product.name}</h3>
                    <div className="sidebutton">
                        <p>R${product.value}</p>

                        <button onClick={() => addToCart(product)}>Adicionar Estampa</button>
                    </div>
                </div>
            </StyledProduct>
        </>
    )
}