import * as S from "./style";

interface MyComponentsProps {
    tarefas: string[];
}

export const Doing: React.FC <MyComponentsProps> = ({tarefas}) => {
    return (
        <>
            <S.TaskDoing>
                <S.TitleDoing>Doing</S.TitleDoing>
                <ul>
                   {tarefas.map((tarefa:string, index:number) => (
                    <li key={index}>{tarefa}</li>
                   ))}
                </ul>
            </S.TaskDoing>
        </>
    )
}