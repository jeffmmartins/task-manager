import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";
import * as S from "./style"
import { FaPlusCircle } from "react-icons/fa";
import {MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { Footer } from "../Footer/Footer";

interface DataInput {
    name: string;

}

interface IFormInput {
    name: string;
}




export const Form: React.FC = () => {
    const tasks = localStorage.getItem('tasks')
    const info: string[] = JSON.parse(tasks || '[]')
    const [task, setTask] = useState<string[]>(info);
    const { register, handleSubmit, reset } = useForm<IFormInput>();



    const data = (formData: DataInput) => {
        if (!formData) {
            alert("Favor Preencher campo")
            return
        }
        setTask([...task, formData.name]);
        reset();
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task))
    }, [task])

    
    const remove = (index: number) => {
        const newTask = task.filter((_,i)=> i !== index)
        setTask(newTask)
    }
    

    return (
        <>
            <S.ContainerSection>
                <S.FormTask onSubmit={handleSubmit(data)}>
                    <S.InputTask type="text" placeholder="Add Task"  {...register("name")} />
                    <S.ButtonAddTask><FaPlusCircle size={"32px"} /></S.ButtonAddTask>
                </S.FormTask>
            </S.ContainerSection>
            <S.TaskSection>
                <S.ContainerTask>
                    {task.map((tasks,index) =>
                    (<S.ListTasks>
                        <S.ItemTask key={index}>{tasks} 
                            <S.ButtonCheck onClick={() => (remove(index))}><MdOutlineCheckBoxOutlineBlank size={"25px"}/></S.ButtonCheck>
                        </S.ItemTask>
                    </S.ListTasks>))}
                </S.ContainerTask>
            </S.TaskSection>
            <Footer tasks={task}/>
        </>
    )
}