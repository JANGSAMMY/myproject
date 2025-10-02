import { BoardConStyle, BoardStyle } from './board';
import BoardTr from './BoardTr';

const BoardTable = ({ currentPosts, loading }) => {
    if (loading) {
        return <div>로딩중...</div>;
    }
    // if (!Array.isArray(currentPosts)) {
    //     return <div>데이터가 올바르지 않습니다.</div>;
    // }
    return (
        <BoardConStyle>
            <h3>공지사항</h3>
            <table>
                <colgroup>
                    <col className="id" />
                    <col className="title" />
                    <col className="author" />
                    <col className="date" />
                    <col className="views" />
                </colgroup>
                <thead className="tables">
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody className="board-table">
                    {currentPosts.map((post) => (
                        <BoardTr key={post.id} post={post} />
                    ))}
                </tbody>
            </table>
        </BoardConStyle>
    );
};

export default BoardTable;
