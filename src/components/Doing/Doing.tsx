import * as S from "./style";

interface MyComponentsProps {
    tarefas: string[];
}

export const Doing: React.FC<MyComponentsProps> = ({ tarefas }) => {
    return (
        <>
            <S.TaskDoing>
                <S.TitleDoing>Doing</S.TitleDoing>
                <S.ListDoing>
                    {tarefas.map((tarefa: string, index: number) => (
                        <S.ItemDoing key={index}>{tarefa}
                        <S.InputTask></S.InputTask>
                        </S.ItemDoing>
                    ))}
                </S.ListDoing>
            </S.TaskDoing>
        </>
    )
}