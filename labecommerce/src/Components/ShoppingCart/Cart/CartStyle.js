import { styled } from "styled-components";

export const CartStyled = styled.div`
    display: grid;
    grid-column: 9/11;
    position: sticky;
    top: 0px;
    border: 2px solid #9D91FF;
    padding: 20px;
    gap: 10px;
    height: fit-content;
    margin-right: 2px;
    img{
        width: 100px;
        height: 100px;
    }
    .header-cart{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    p{
        border-bottom: 1px solid black;
        gap: 50px;
    }
    
`