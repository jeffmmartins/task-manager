import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./style"
import { FaPlusCircle } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { TaskCount } from "../TaskCount/TaskCount";

interface DataInput {
    task: string;

}

interface IFormInput {
    task: string;
}


export const Form: React.FC = () => {
    const tasks = localStorage.getItem('tasks')
    const info: string[] = JSON.parse(tasks || '[]')
    const [task, setTask] = useState<string[]>(info);
    const { register, handleSubmit, reset } = useForm<IFormInput>();



    const data = (formData: DataInput) => {
        if (!formData.task) {
            alert("Favor Preencher o campo corretamente")
            return
        }
        setTask([...task, formData.task]);
        reset();
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task))
    }, [task])


    const remove = (index: number) => {
        const newTask = task.filter((_, i) => i !== index)
        setTask(newTask)
    }


    return (
        <>
            <S.ContainerSection>
                <S.FormTask onSubmit={handleSubmit(data)}>
                    <S.InputTask type="text" placeholder="Add Task"  {...register("task")} />
                    <S.ButtonAddTask><FaPlusCircle size={"32px"} /></S.ButtonAddTask>
                </S.FormTask>
                <TaskCount tasks={task} />
            </S.ContainerSection>
            <S.TaskSection>
                <S.ContainerTask>
                    <S.TextTaskCount>
                        To Do
                    </S.TextTaskCount>
                    {task.map((tasks, index) =>
                    (<S.ListTasks>
                        <S.ItemTask key={index}>{tasks}
                            <S.LabelCheck>
                            <S.InputCheck onClick={() => (remove(index))}></S.InputCheck>
                            </S.LabelCheck>
                        </S.ItemTask>
                    </S.ListTasks>
                    ))}
                </S.ContainerTask>
            </S.TaskSection>
        </>
    )
}