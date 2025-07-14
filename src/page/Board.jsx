import { BoardConStyle, BoardStyle } from '../components/board/board';
import Board1 from '../components/board/Board1';
import { Container } from './style';

const Board = () => {
    return (
        <Container>
            <BoardStyle>
                <h2>개시판</h2>
            </BoardStyle>
            <BoardConStyle>
                <Board1 />
            </BoardConStyle>
        </Container>
    );
};

export default Board;
