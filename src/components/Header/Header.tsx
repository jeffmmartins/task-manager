import * as S from "./style"
import { BsRocketFill } from "react-icons/bs"



export const Header: React.FC = () => {
    return (
        <>
            <S.Container>
                <h1><BsRocketFill/> To do List</h1>
            </S.Container>
        </>
    )
}