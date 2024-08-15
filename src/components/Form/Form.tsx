import React, { useEffect, useState } from "react";
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
    const [task, setTask ] = useState([""]);
    const {register, handleSubmit} = useForm<IFormInput>();

    useEffect(()=>{
        const tasks = localStorage.getItem("Tasks")
        if (tasks === "") {
            setTask(tasks);
        }
    },[task])

    const data = (formData: DataInput) => {
        if(!formData.name){
            alert("Favor Preencher campo")
            return
        }
        setTask([...task, formData.name]);
        reset();
    }

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(task))
    },[task])
    

    

    return (
        <>
            <S.ContainerSection>
                {task}
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