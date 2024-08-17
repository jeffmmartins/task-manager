import * as S from "./style"

interface FooterProps {
    tasks: string[];
}

export const Footer:React.FC <FooterProps> = ({tasks}) => {
    return(
        
        <S.ContainerFooter>
            <p>Tarefas Adicionadas: {tasks.length}</p>
            <p>Tarefas concluidas</p>
        </S.ContainerFooter>
        
    )
}