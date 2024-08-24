import * as S from "./style"

interface FooterProps {
    tasks: string[];
}

export const TaskCount:React.FC <FooterProps> = ({tasks}) => {
    return(
        
        <S.ContainerFooter>
            <p>Tarefas Adicionadas: {tasks.length}</p>
        </S.ContainerFooter>
        
    )
}