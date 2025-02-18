import React, { useEffect } from "react";
import Items from "../Items/Items"
import { CartStyled } from "./CartStyle";
import ImageCart from "../../../assets/ImageCart.png"


export default function Cart({ cart, setCart, amount, setAmount }) {

    const removeItem = (id) => {
        cart.map((product) => {
            if (product.id === id && product.quantity >= 1) {
                product.quantity = product.quantity - 1
                setCart([...cart])
            }
            if (product.quantity === 0) {
                const newCart = cart.filter(productRemoved => productRemoved.quantity !== 0)
                setCart(newCart)
            }
            if (cart.length === 1) {
                localStorage.removeItem("cartKey")
            }

        })
    }

    useEffect(() => {
        let newValue = 0
        console.log(cart)
        cart.forEach((product) => {
            newValue += product.value * product.quantity
        })
        setAmount(newValue)
    }, [cart])

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cartKey", JSON.stringify(cart))
        }
    }, [cart])

    useEffect(() => {
        const restoredCart = localStorage.getItem("cartKey");
        if (restoredCart) {
            setCart(JSON.parse(restoredCart));
        }
    }, [])


    const renderItemsOnCart = cart.map((product) => {
        return <Items
            key={product.id}
            name={product.name}
            value={product.value * product.quantity}
            image={product.imageUrl}
            quantity={product.quantity}
            removeItem={removeItem}
            id={product.id} />
    })

    const comprar = () => {

        alert("Função não implementada ainda, aguarde!")

    }

    return (
        <>
            <CartStyled>
                <div className="header-cart">
                    <h2>Cart</h2>
                    <img src={ImageCart} />
                </div>
                {renderItemsOnCart}
                <br />
                <p> Total: R${amount.toFixed(2)}</p>
                {cart.length > 0 && (
                    <button className="button" onClick={comprar}>Comprar</button>
                )}
            </CartStyled>
        </>
    )
}