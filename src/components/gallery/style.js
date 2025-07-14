import styled from 'styled-components';
export const GalleryVisualStyle = styled.div`
    width: 100%;
    height: 800px;
    background-image: url('./images/banner1.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const GalleryInputStyle = styled.form`
    p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        input[type='text'] {
            width: 500px;
            height: 50px;
            border: 1px solid #000;
            box-sizing: border-box;
            color: #333;
            padding: 10px;
            outline: none;
            border-radius: 15px;
        }
        button {
            width: 70px;
            height: 50px;
            color: #fff;
            background: orange;
            border: none;
            border-radius: 15px;
        }
    }
`;
export const GalleryListStyle = styled.div`
    margin-top: 80px;
    .my-masonry-grid {
        display: -webkit-box; /* Not needed if autoprefixing */
        display: -ms-flexbox; /* Not needed if autoprefixing */
        display: flex;
        margin-left: -30px; /* gutter size offset */
        width: auto;
    }
    .my-masonry-grid_column {
        padding-left: 30px; /* gutter size */
        background-clip: padding-box;
    }

    /* Style your items */
    .my-masonry-grid_column > div {
        /* change div to reference your elements you put in <Masonry> */
        background: grey;
        margin-bottom: 30px;
    }
`;
export const GalleryItemStyle = styled.article`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgb(112, 112, 112);
    padding: 16px;
    margin-bottom: 24px;
    transition: 0.2s ease-in-out;
    &:hover {
        transform: translateY(-5px);
    }
    img {
        width: 100%;
        height: auto;
    }
    p {
        overflow: hidden;
    }
    h3 {
        font-size: 16px;
        color: orange;
        margin: 8px 0;
        font-weight: 600;
    }
    ul {
        font-size: 14px;
        margin: 8px 0;
        padding: 0;
        list-style: none;
        color: #333;
        line-height: 1.6;
    }
    p {
        margin-top: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
    span {
        background: #f1f1f1;
        padding: 4px 8px;
        border-radius: 15px;
        font-size: 13px;
        color: #444;
    }
`;
