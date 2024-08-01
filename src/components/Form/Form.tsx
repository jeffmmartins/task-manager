import React from "react";
import * as S from "./style"
import { FaPlusCircle } from "react-icons/fa";

export const Form: React.FC = () => {
    return (
        <S.ContainerSection>
            <S.InputSection type="text" placeholder="Adicionar Tarefa"/>
            <S.ButtonAddTask><FaPlusCircle /></S.ButtonAddTask>
        </S.ContainerSection>
    )
}