import { styled } from "styled-components";

export const StyledItems = styled.div`
    width: 100%;
    height: 100%;
    p{
        width: 100%;

    }
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button{
        height: 40px;
        width: 40px;
        border-radius: 5px;
        /* padding: 8px; */
        background-color: #de2f45;
        border: none;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img{
            width: 30px;
            height: 30px;
        }

        &:hover{
            color: white;
            background-color: red;
        }
    }
`