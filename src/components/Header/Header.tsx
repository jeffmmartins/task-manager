import * as S from "./style"
import { BsRocketFill } from "react-icons/bs"

export const Header = () => {
    return (
        <>
            <S.Container>
                <BsRocketFill/>
                <h1>To do List</h1>
            </S.Container>
        </>
    )
}