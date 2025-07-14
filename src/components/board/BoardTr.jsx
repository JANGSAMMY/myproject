const BoardTr = ({ post }) => {
    const { id, title, author, date, views } = post;
    return (
        <tr>
            <td> {id}</td>
            <td> {title} </td>
            <td>
                <p>{author}</p>
            </td>
            <td>
                <p>{date}</p>
            </td>
            <td>
                <p>{views}</p>
            </td>
        </tr>
    );
};

export default BoardTr;
