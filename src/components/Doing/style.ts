import styled from "styled-components";



export const TaskDoing = styled.section`
    width: 100%;
    box-shadow: 5px 5px 5px #0002;
    border: 0.1px solid #0002;
    margin-top: 30px;
    
    @media (max-width: 768px) {
        margin-top: 20px;
        width: 100%;
    }
`
export const TitleDoing = styled.p`
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    background-color: #0001;
    color: black;
`

export const ListDoing = styled.ul`
list-style: none;
padding: 0.5rem;
`
export const ItemDoing = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
`