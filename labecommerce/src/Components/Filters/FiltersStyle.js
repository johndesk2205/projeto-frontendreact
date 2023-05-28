import { styled } from "styled-components"

export const StyledFilters = styled.div`
    grid-column: 1/3;
    grid-template-columns: 1/3;
    display: flex;
    position: sticky;
    top: 0px;
    flex-direction: column;

    padding: 20px;
    gap: 10px;
    height: fit-content;

    input{
        border-color: #9D91FF;
        border-radius: 5px;
        color: black;
        height: 30px;
    }
    @keyframes disappear {
    0% {
    opacity: 1;
    transform: translateY(0);
    }
    50% {
    opacity: 0;
    transform: translateY(100px);
    }
    100% {
    opacity: 0;
    transform: translateY(200px);
    }
}

@keyframes appear {
    0% {
    opacity: 0;
    transform: translateY(200px);
    }
    50% {
    opacity: 0;
    transform: translateY(100px);
    }
    100% {
    opacity: 1;
    transform: translateY(0);
    }
}
.image{
    animation-name: disappear;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
.image.appear{
    animation-name: appear;
    animation-duration: 2s;
    animation-fill-mode: forwards;
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