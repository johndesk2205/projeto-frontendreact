import { styled } from "styled-components"

export const StyledFilters = styled.div`
    grid-column: 1/3;
    grid-template-columns: 1/3;
    display: flex;
    position: sticky;
    top: 0px;
    flex-direction: column;
    border: 2px solid #9D91FF;
    padding: 20px;
    gap: 10px;
    height: fit-content;

    input{
        border-color: #9D91FF;
        border-radius: 5px;
        color: black;
    }
    img{
        width: 100px;
        height: 100px;
    }
    .header-filter{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`