import React from "react";
import * as S from "./style"


export const Form: React.FC = () => {
    return (
        <S.ContainerSection>
            <S.ContainerSection type="text" placeholder="Adicionar Tarefa"></S.ContainerSection>
            <input type="text" placeholder="Adicionar Tarefa" />
            <button>Adicionar</button>
        </S.ContainerSection>
    )
}