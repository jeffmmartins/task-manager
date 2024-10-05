import styled from "styled-components";

export const Container = styled.header`
padding: 30px;
text-align: center;
max-width: 1920px;
background-color: #0001;

border-radius: 0px 0px 100px 100px;

@media (max-width: 768px){
    padding: 30px;
    text-align: center;
    width: 100%;
    background-color: #0001;
    border-radius: 0px 0px 100px 100px;
}
`
export const Title = styled.h1`
color: #08f;
font-weight: 700;
`