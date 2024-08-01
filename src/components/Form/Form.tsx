import React from "react";
import * as S from "./style"
import { FcPlus } from "react-icons/fc";

export const Form: React.FC = () => {
    return (
        <S.ContainerSection>
            <S.InputSection type="text" placeholder="Adicionar Tarefa"/>
            <button><FcPlus/></button>
        </S.ContainerSection>
    )
}