
import * as S from "./style";

interface MyComponentsProps {
    tarefas: string[];
    setTaskDoing: React.Dispatch<React.SetStateAction<string[]>>;
}



export const Doing: React.FC<MyComponentsProps> = ({ tarefas, setTaskDoing }) => {


    const removeTask = () => {
        setTaskDoing([])
    }

    return (
        <>
            <S.TaskDoing>
                <S.TitleDoing>Doing</S.TitleDoing>
                {tarefas.map((tarefa: string, index: number) => (
                    <S.ListDoing>
                        <S.ItemDoing key={index}>{tarefa}
                            <S.InputTask onClick={removeTask}></S.InputTask>
                        </S.ItemDoing>
                    </S.ListDoing>
                ))}

            </S.TaskDoing>
        </>
    )
}