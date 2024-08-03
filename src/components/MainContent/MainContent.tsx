import React from "react";
import { Form } from "../Form/Form";
import * as S from "./style"

export const MainContent: React.FC = () => {
    return (
        <>
            <S.MainContainer>
                <Form />
            </S.MainContainer>
        </>
    )
}