interface FooterProps {
    tasks: string[];
}

export const Footer:React.FC <FooterProps> = ({tasks}) => {
    return(
        <>
        <footer>
            <p>Tarefas Feitas {tasks.length}</p>
        </footer>
        </>
    )
}