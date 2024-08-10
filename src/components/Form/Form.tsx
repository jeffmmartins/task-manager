import React from "react";
import * as S from "./style"
import { FaPlusCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";

interface DataInput {
    name:string;
}

interface IFormInput{
    name:string;
}

export const Form: React.FC = () => {
    const {register, handleSubmit} = useForm<IFormInput>()

    const data = (formData: DataInput) => {
        console.log(formData.name)
    }

    return (
        <>
            <S.ContainerSection>
                <S.FormTask onSubmit={handleSubmit(data)}>
                    <S.InputTask type="text" placeholder="Add Task" {...register("name")}/>
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