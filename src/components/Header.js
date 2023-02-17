import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div className='left'>
                <ul className='navbar'>
                    <li onClick={() => props.handleShow(false)}><a href="#"></a>Home</li>
                    <li><a href="#"></a>About Us</li>
                    <li><a href="#"></a>Contact Us</li>
                </ul>
                </div>
            <div className='mid'><h3>SHOP&MORE</h3></div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;