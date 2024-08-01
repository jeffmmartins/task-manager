import React from "react";
import * as S from "./style"


export const Form: React.FC = () => {
    return (
        <S.ContainerSection>
            <S.InputSection type="text" placeholder="Adicionar Tarefa"/>
            <button>Adicionar</button>
        </S.ContainerSection>
    )
}