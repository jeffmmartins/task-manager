import React from "react";
import * as S from "./style"
import { FaPlusCircle } from "react-icons/fa";
import { useForm } from "useform-simple-hook";

export const Form: React.FC = () => {
    const [register, handleSubmit] = useForm

    return (
        <>
            <S.ContainerSection>
                <S.FormTask >
                    <S.InputTask type="text" placeholder="Add Task" />
                    <S.ButtonAddTask><FaPlusCircle size={"32px"} /></S.ButtonAddTask>
                </S.FormTask>
            </S.ContainerSection>
            <S.TaskSection>
                <S.ListTask>
                    <ul>
                        <li>teste <button>remover</button></li>
                        <li>teste <button>remover</button></li>
                    </ul>
                </S.ListTask>
            </S.TaskSection>
        </>
    )
}