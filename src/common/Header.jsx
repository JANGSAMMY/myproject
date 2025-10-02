import { Link } from 'react-router-dom';
import { HeaderStyle, InnerStyle } from './style';
import Nav from './Nav';

const Header = () => {
    return (
        <HeaderStyle>
            <InnerStyle className="inner">
                <h1>
                    <Link to="/">
                        <img src="./dog.png" alt="" style={{ width: '300px' }} />
                    </Link>
                </h1>
                <Nav />
            </InnerStyle>
        </HeaderStyle>
    );
};

export default Header;
