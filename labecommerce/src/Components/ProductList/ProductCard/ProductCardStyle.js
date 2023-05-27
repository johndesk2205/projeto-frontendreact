import styled from "styled-components";

export const StyledProduct = styled.div`
*{
    color:black;
}
    height: 400px;
    width: 250px;
    border: 3px solid #9D91FF;
    font-size: 14px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: white;
    img{
        width: 100%;
        height: 300px;
        border-radius: 7px;
        object-fit: cover;
    }
    .infosCard{
        width: 100%;
        h3{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        p{

            font-weight: bolder;
            font-style: italic;
            margin: 5px;
        }
        .sidebutton{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                width: 20%;
            }
        }
    }  
    button {
    height: 50px;
    width: 90px;
    margin: 5px;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    border: 3px solid #F1E26E;
    transition: background-color 0.3s, color 0.3s;
        &:hover {
    background-color: #F1E26E;
    color: white;
    transform: scale(1.1);
         }
    }


`  