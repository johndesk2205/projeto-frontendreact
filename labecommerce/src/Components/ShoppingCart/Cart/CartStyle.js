import { styled } from "styled-components";

export const CartStyled = styled.div`
    display: grid;
    grid-column: 9/11;
    position: sticky;
    top: 0px;
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
    .button{
        width: 150px;
        height: 30px;
        background-color: transparent;
        border-radius: 10px;
        border: 1px solid yellow;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            background-color: #9D91FF;
        }
    }
    
`