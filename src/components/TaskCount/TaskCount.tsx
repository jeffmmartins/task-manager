import * as S from "./style"

interface FooterProps {
    tasks: string[];
}

export const TaskCount: React.FC<FooterProps> = ({ tasks }) => {
    return (

        <S.ContainerFooter>
            <S.Text>
                Tasks added: {tasks.length}
            </S.Text>
        </S.ContainerFooter>

    )
}