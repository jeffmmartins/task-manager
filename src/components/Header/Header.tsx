import * as S from "./style"
import { SlRocket } from "react-icons/sl"

export const Header = () => {
    return (
        <>
            <S.Container>
                <SlRocket/>
                <h1>To do List</h1>
            </S.Container>
        </>
    )
}