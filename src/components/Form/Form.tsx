import React from "react";
import * as S from "./style"
import { FaPlusCircle } from "react-icons/fa";

export const Form: React.FC = () => {
    return (
        <>
        <S.ContainerSection>
            <S.InputTask type="text" placeholder="Add Task"/>
            <S.ButtonAddTask><FaPlusCircle size={"32px"}/></S.ButtonAddTask>
        </S.ContainerSection>
        <S.TaskSection>
            <ul>
                <li>teste</li>
                <li>teste</li>
            </ul>
            </S.TaskSection>
        </>
    )
}