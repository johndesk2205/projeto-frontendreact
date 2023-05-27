import React from "react";
import lixeira from "../../../assets/trash.png"
import { StyledItems } from "./ItemsStyle";

export default function Items({ name, value, quantity, removeItem, id }) {
    return (
        <>
            <StyledItems>
                <p>{quantity}x {name}</p>
                <div>
                    <p>R${value.toFixed(2)}</p>
                    <button onClick={() => removeItem(id)}> <img src={lixeira} title="Remover" /> </button>
                </div>
            </StyledItems>
        </>
    )
}