import  { styled } from "styled-components";


export const ContainerSection = styled.section`
margin-bottom: 50px;

`

export const FormTask = styled.form`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;

`

export const InputTask = styled.input`
width: 500px;
height: 32px;
font-size: 1rem;
font-weight: 500;
padding: 5px;

background-color: #0001;
border-radius: 5px;
`
export const ButtonAddTask = styled.button`
width: 35px;
height: 32px;
background-color: white;
color: #08f;
border: none;
`

export const TaskSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const ContainerTask = styled.section`
text-align: center;
width: 800px;
box-shadow: 5px 5px 5px #FADEC9;
border: 0.1px solid #0002;

@media (max-width: 768px) {
  width: 100%;
}
`

export const ListTasks = styled.ul`
list-style: none;
padding: 0.5rem;
`
export const ItemTask = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
`

export const InputCheck = styled.input.attrs({type: "checkbox"})`
 /* Estilo padrão do checkbox */
  width: 20px;
  height: 20px;
  appearance: none;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;

&:hover{
    background-color: #08f;
    transition: 0.5s;
}
`

export const TextTaskCount = styled.p`
text-align: center;
font-family: "Poppins", sans-serif;
font-weight: 900;
background-color: #0001;
color: black;
font-size: 2rem;
`
