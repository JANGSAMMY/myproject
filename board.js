import styled from 'styled-components';
export const BoardStyle = styled.div`
    width: 100%;
    height: 800px;
    background-image: url('./images/banner2.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const BoardConStyle = styled.div`
    margin: 50px;
    h3 {
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 30px;
        color: brown;
    }
    .tables {
        border: 1px solid #222222;
        background-color: rgb(255, 153, 0);
        tr {
            text-align: center;
            th {
                padding: 15px 0;
                color: #222222;
                font-weight: 600;
            }
        }
    }
    .board-table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;

        th,
        td {
            padding: 15px;
            border: 1px solid #333;
        }

        th {
            background-color: #333;
            font-weight: bold;
        }

        tbody tr:hover {
            background-color: beige;
        }
    }
`;
export const PagingStyle = styled.p`
    margin-top: 40px;
    text-align: center;

    a {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid gray;
        border-radius: 50px;
        text-align: center;
        line-height: 30px;
        margin-right: 20px;
        cursor: pointer;
        &:hover {
            background-color: rgb(255, 153, 0);
            color: #fff;
            border-color: #dcdcdc;
        }
        &.on {
            background: #fff;
        }
    }
`;
