import * as S from "./style"
import { BsRocketFill } from "react-icons/bs"

interface Style{
    width: string;
}

export const Header: React.FC <Style> = () => {
    return (
        <>
            <S.Container>
                <BsRocketFill className={{with: "50px"}}/>
                <h1>To do List</h1>
            </S.Container>
        </>
    )
}