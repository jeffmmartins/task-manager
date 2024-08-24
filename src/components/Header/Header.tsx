import * as S from "./style"
import { BsRocketFill } from "react-icons/bs"



export const Header: React.FC = () => {
    return (
        <>
            <S.Container>
                <S.Title><BsRocketFill/> Task Manager</S.Title>
            </S.Container>
        </>
    )
}