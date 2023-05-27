import { styled } from "styled-components";

export const HomeStyled = styled.div`
    display: grid;
    grid-column: 3/9;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 5%, 95%;
    border: 2px solid #9D91FF;
    padding: 30px;
    gap: 10px;
    .header{
        display: flex;
        width: 100%;
        grid-column: 1/4;
        justify-content: space-between;

        select{
            border-radius: 5px;
            border: 2px solid #9D91FF;
            cursor: pointer;
            background-color: #9D91FF;

        }

    }
   .cartao{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        grid-column: 1/4;
        grid-row: 2/3;
    }
    
`